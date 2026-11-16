import * as React from "react";
import { collections as seedCollections, content as seedContent } from "../../../seed/seed.json";

type SeedField = {
	slug: string;
	label: string;
	type: string;
	required?: boolean;
	unique?: boolean;
	indexed?: boolean;
	searchable?: boolean;
	translatable?: boolean;
	defaultValue?: unknown;
	validation?: Record<string, unknown>;
	widget?: string;
	options?: unknown;
};

type SeedCollection = {
	slug: string;
	label: string;
	labelSingular?: string;
	description?: string;
	fields: SeedField[];
	[key: string]: unknown;
};

type SeedEntry = {
	id: string;
	slug?: string;
	status?: string;
	locale?: string;
	translationOf?: string;
	data: Record<string, unknown>;
};

type DbField = SeedField & { id: string; sortOrder: number };

type Change =
	| { kind: "createCollection"; collection: string; seed: SeedCollection }
	| { kind: "content"; collection: string; entries: SeedEntry[] }
	| { kind: "collection"; collection: string; detail: string; body: Record<string, unknown> }
	| { kind: "create"; collection: string; field: SeedField }
	| { kind: "update"; collection: string; field: SeedField; detail: string }
	| { kind: "reorder"; collection: string; order: string[] }
	| { kind: "warning"; collection: string; detail: string };

const API = "/_emdash/api/schema/collections";

async function api<T>(path: string, init?: RequestInit): Promise<T> {
	const response = await fetch(path, {
		...init,
		headers: { "Content-Type": "application/json", "X-EmDash-Request": "1", ...init?.headers },
	});
	const json = await response.json().catch(() => null);
	if (!response.ok || json?.success === false) {
		throw new Error(json?.error?.message ?? `${response.status} ${response.statusText}`);
	}
	return json?.data as T;
}

const canonical = (value: unknown): unknown => {
	if (Array.isArray(value)) return value.map(canonical);
	if (value && typeof value === "object") {
		const entries = Object.entries(value).filter(([, v]) => v !== undefined).sort(([a], [b]) => a.localeCompare(b));
		return entries.length ? Object.fromEntries(entries.map(([k, v]) => [k, canonical(v)])) : null;
	}
	return value ?? null;
};
const same = (a: unknown, b: unknown) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));

async function diff(): Promise<Change[]> {
	const changes: Change[] = [];
	for (const seed of seedCollections as SeedCollection[]) {
		const entries = (seedContent as Record<string, SeedEntry[] | undefined>)[seed.slug] ?? [];
		let current: { label: string; labelSingular?: string; description?: string };
		try {
			({ item: current } = await api<{ item: typeof current }>(`${API}/${seed.slug}`));
		} catch {
			changes.push({ kind: "createCollection", collection: seed.slug, seed });
			for (const field of seed.fields) changes.push({ kind: "create", collection: seed.slug, field });
			if (entries.length) changes.push({ kind: "content", collection: seed.slug, entries });
			continue;
		}
		const renamed = (["label", "labelSingular", "description"] as const).filter((key) => (seed[key] ?? "") !== (current[key] ?? ""));
		if (renamed.length) {
			changes.push({
				kind: "collection",
				collection: seed.slug,
				detail: renamed.map((key) => `${key}: «${current[key] ?? ""}» → «${seed[key] ?? ""}»`).join(", "),
				body: Object.fromEntries(renamed.map((key) => [key, seed[key] ?? ""])),
			});
		}

		const { items } = await api<{ items: DbField[] }>(`${API}/${seed.slug}/fields`);
		const bySlug = new Map(items.map((field) => [field.slug, field]));
		for (const field of seed.fields) {
			const existing = bySlug.get(field.slug);
			if (!existing) {
				changes.push({ kind: "create", collection: seed.slug, field });
				continue;
			}
			if (existing.type !== field.type) {
				changes.push({
					kind: "warning",
					collection: seed.slug,
					detail: `«${field.slug}» es de tipo ${existing.type} y el seed dice ${field.type}; no se cambia automáticamente.`,
				});
				continue;
			}
			const updates = [
				existing.label !== field.label && "nombre",
				Boolean(existing.required) !== Boolean(field.required) && "obligatorio",
				(existing.widget ?? "") !== (field.widget ?? "") && "editor",
				!same(existing.validation, field.validation) && "subcampos/validación",
				!same(existing.options, field.options) && "opciones",
			].filter(Boolean);
			if (updates.length) changes.push({ kind: "update", collection: seed.slug, field, detail: updates.join(", ") });
		}

		if (entries.length) {
			const { items: existingEntries } = await api<{ items: unknown[] }>(`/_emdash/api/content/${seed.slug}?limit=1&status=all`);
			if (existingEntries.length === 0) changes.push({ kind: "content", collection: seed.slug, entries });
		}

		const seedOrder = seed.fields.map((field) => field.slug);
		const order = [...seedOrder, ...items.map((field) => field.slug).filter((slug) => !seedOrder.includes(slug))];
		const currentOrder = [...items].sort((a, b) => a.sortOrder - b.sortOrder).map((field) => field.slug);
		if (!same(order, currentOrder)) changes.push({ kind: "reorder", collection: seed.slug, order });
	}
	return changes;
}

async function apply(change: Change) {
	const fieldBody = (field: SeedField) => ({
		label: field.label,
		required: field.required ?? false,
		validation: field.validation ?? null,
		...(field.widget ? { widget: field.widget } : {}),
		...(field.options !== undefined ? { options: field.options } : {}),
	});
	switch (change.kind) {
		case "createCollection": {
			const { fields: _fields, ...collection } = change.seed;
			return api(API, { method: "POST", body: JSON.stringify(collection) });
		}
		case "content": {
			const ids = new Map<string, string>();
			for (const entry of change.entries) {
				const { item } = await api<{ item: { id: string } }>(`/_emdash/api/content/${change.collection}`, {
					method: "POST",
					body: JSON.stringify({
						data: entry.data,
						slug: entry.slug,
						locale: entry.locale,
						translationOf: entry.translationOf ? ids.get(entry.translationOf) : undefined,
					}),
				});
				ids.set(entry.id, item.id);
				if (entry.status === "published") {
					await api(`/_emdash/api/content/${change.collection}/${item.id}/publish`, { method: "POST", body: "{}" });
				}
			}
			return;
		}
		case "collection":
			return api(`${API}/${change.collection}`, { method: "PUT", body: JSON.stringify(change.body) });
		case "create":
			return api(`${API}/${change.collection}/fields`, {
				method: "POST",
				body: JSON.stringify({
					slug: change.field.slug,
					type: change.field.type,
					unique: change.field.unique,
					indexed: change.field.indexed,
					searchable: change.field.searchable,
					translatable: change.field.translatable,
					defaultValue: change.field.defaultValue,
					...fieldBody(change.field),
				}),
			});
		case "update":
			return api(`${API}/${change.collection}/fields/${change.field.slug}`, {
				method: "PUT",
				body: JSON.stringify({ ...fieldBody(change.field), widget: change.field.widget ?? "" }),
			});
		case "reorder":
			return api(`${API}/${change.collection}/fields/reorder`, { method: "POST", body: JSON.stringify({ fieldSlugs: change.order }) });
	}
}

const describe = (change: Change) => {
	switch (change.kind) {
		case "createCollection":
			return `Crear la sección «${change.seed.label}»`;
		case "content":
			return `Cargar el contenido inicial (${change.entries.map((entry) => entry.locale ?? "es").join(", ")})`;
		case "collection":
			return `Renombrar la colección (${change.detail})`;
		case "create":
			return `Crear el campo «${change.field.label}» (${change.field.slug}, ${change.field.type})`;
		case "update":
			return `Actualizar «${change.field.label}» (${change.field.slug}): ${change.detail}`;
		case "reorder":
			return "Ordenar los campos como en el seed";
		case "warning":
			return change.detail;
	}
};

const buttonClass =
	"flex w-max items-center font-medium select-none border-0 shadow-xs h-9 gap-1.5 rounded-lg px-3 text-base bg-kumo-base !text-kumo-default ring ring-kumo-line not-disabled:hover:bg-kumo-tint disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";

function SyncPage() {
	const [changes, setChanges] = React.useState<Change[] | null>(null);
	const [status, setStatus] = React.useState<Record<number, string>>({});
	const [busy, setBusy] = React.useState(false);
	const [error, setError] = React.useState<string>();

	const load = React.useCallback(async () => {
		setError(undefined);
		setStatus({});
		setChanges(null);
		try {
			setChanges(await diff());
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : String(cause));
		}
	}, []);

	React.useEffect(() => {
		void load();
	}, [load]);

	const run = async () => {
		if (!changes) return;
		setBusy(true);
		for (const [index, change] of changes.entries()) {
			if (change.kind === "warning") continue;
			try {
				await apply(change);
				setStatus((s) => ({ ...s, [index]: "✓ Aplicado" }));
			} catch (cause) {
				setStatus((s) => ({ ...s, [index]: `✗ ${cause instanceof Error ? cause.message : String(cause)}` }));
			}
		}
		setBusy(false);
	};

	const pending = changes?.filter((change) => change.kind !== "warning") ?? [];
	const grouped = Object.groupBy(changes?.map((change, index) => ({ change, index })) ?? [], ({ change }) => change.collection);

	return (
		<section className="grid gap-6" style={{ maxWidth: "52rem" }}>
			<div className="grid gap-2">
				<h1 className="text-2xl font-semibold">Sincronizar esquema</h1>
				<p className="text-base text-kumo-subtle">
					Compara los tipos de contenido de esta base con los del sitio (seed/seed.json) y aplica lo que falte:
					secciones y campos nuevos, nombres, editores de fecha, orden de los campos y el contenido inicial de las secciones vacías. No borra campos ni contenido.
				</p>
			</div>
			{error && <p className="text-base text-kumo-danger">No se pudo leer el esquema: {error}</p>}
			{!changes && !error && <p className="text-base text-kumo-subtle">Revisando el esquema…</p>}
			{changes && changes.length === 0 && <p className="text-base">Todo al día: el esquema coincide con el del sitio.</p>}
			{changes && changes.length > 0 && (
				<div className="grid gap-4">
					{Object.entries(grouped).map(([collection, rows]) => (
						<div key={collection} className="grid gap-2 rounded-lg ring ring-kumo-line" style={{ padding: "1rem" }}>
							<h2 className="text-base font-semibold">{collection}</h2>
							<ul className="grid gap-1" style={{ listStyle: "disc", paddingLeft: "1.25rem" }}>
								{rows!.map(({ change, index }) => (
									<li key={index} className={change.kind === "warning" ? "text-base text-kumo-danger" : "text-base"}>
										{describe(change)}
										{status[index] && <span className="text-sm text-kumo-subtle"> — {status[index]}</span>}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
			<div style={{ display: "flex", gap: "0.75rem" }}>
				<button type="button" className={buttonClass} disabled={busy || pending.length === 0} onClick={() => void run()}>
					{busy ? "Aplicando…" : `Aplicar ${pending.length} cambio${pending.length === 1 ? "" : "s"}`}
				</button>
				<button type="button" className={buttonClass} disabled={busy} onClick={() => void load()}>
					Volver a revisar
				</button>
			</div>
		</section>
	);
}

export const pages = {
	"/sincronizar": SyncPage,
};
