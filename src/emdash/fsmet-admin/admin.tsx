import * as React from "react";

export { pages } from "./sync";

interface FieldWidgetProps {
	value: unknown;
	onChange: (value: unknown) => void;
	label: string;
	id: string;
	required?: boolean;
	minimal?: boolean;
}

type Parts = { day: string; month: string; year: string; hour: string; minute: string };

const TIME_ZONE = "America/Argentina/Buenos_Aires";
const OFFSET = "-03:00";

const MONTHS = [
	"enero", "febrero", "marzo", "abril", "mayo", "junio",
	"julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const EMPTY: Parts = { day: "", month: "", year: "", hour: "", minute: "" };

const pad = (n: number) => String(n).padStart(2, "0");
const range = (from: number, to: number, step = 1) =>
	Array.from({ length: Math.floor((to - from) / step) + 1 }, (_, i) => from + i * step);

function toParts(value: unknown): Parts {
	if (typeof value !== "string" || !value) return EMPTY;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return EMPTY;
	const p = Object.fromEntries(
		new Intl.DateTimeFormat("en-CA", {
			timeZone: TIME_ZONE,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23",
		})
			.formatToParts(date)
			.map((part) => [part.type, part.value]),
	);
	return { day: p.day, month: p.month, year: p.year, hour: p.hour, minute: p.minute };
}

const daysIn = (year: string, month: string) =>
	year && month ? new Date(Date.UTC(Number(year), Number(month), 0)).getUTCDate() : 31;

function toValue(parts: Parts): string | null {
	const { day, month, year, hour, minute } = parts;
	if (!day || !month || !year) return null;
	return new Date(`${year}-${month}-${day}T${hour || "00"}:${minute || "00"}:00${OFFSET}`).toISOString();
}

function preview(parts: Parts) {
	const iso = toValue(parts);
	if (!iso) return null;
	const text = new Intl.DateTimeFormat("es-AR", {
		timeZone: TIME_ZONE,
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(iso));
	return `${text.charAt(0).toUpperCase()}${text.slice(1)}, ${parts.hour || "00"}:${parts.minute || "00"} h`;
}

const controlClass =
	"border-0 bg-kumo-control text-kumo-default ring ring-kumo-line outline-none focus:outline-none h-9 rounded-lg px-2 text-base focus:ring-kumo-focus/50 focus:ring-[1.5px]";

function Select({
	label,
	value,
	onChange,
	options,
	id,
	width,
}: {
	label: string;
	value: string;
	onChange: (value: string) => void;
	options: { value: string; label: string }[];
	id?: string;
	width: string;
}) {
	return (
		<label style={{ display: "grid", gap: "0.25rem" }}>
			<span className="text-sm text-kumo-subtle">{label}</span>
			<select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={controlClass} style={{ width }}>
				<option value="">—</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</label>
	);
}

function FechaHoraField({ value, onChange, label, id, required }: FieldWidgetProps) {
	const [parts, setParts] = React.useState<Parts>(() => toParts(value));
	const external = toValue(toParts(value));

	React.useEffect(() => {
		setParts((current) => (toValue(current) === external ? current : toParts(external)));
	}, [external]);

	const update = (patch: Partial<Parts>) => {
		const next = { ...parts, ...patch };
		const maxDay = daysIn(next.year, next.month);
		if (next.day && Number(next.day) > maxDay) next.day = pad(maxDay);
		if (next.day && next.month && next.year) {
			next.hour ||= "00";
			next.minute ||= "00";
		}
		setParts(next);
		onChange(toValue(next));
	};

	const currentYear = new Date().getFullYear();
	const years = range(Math.min(currentYear - 1, Number(parts.year) || currentYear), Math.max(currentYear + 3, Number(parts.year) || 0));
	const minutes = [...new Set([...range(0, 55, 5).map(pad), parts.minute].filter(Boolean))].sort();
	const text = preview(parts);

	return (
		<div role="group" aria-labelledby={`${id}-label`} className="grid gap-2">
			<span id={`${id}-label`} className="m-0 select-none text-base font-medium text-kumo-default">
				{label}
			</span>
			<div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", gap: "0.5rem" }}>
				<Select
					id={id}
					label="Día"
					width="4.5rem"
					value={parts.day}
					onChange={(day) => update({ day })}
					options={range(1, daysIn(parts.year, parts.month)).map((d) => ({ value: pad(d), label: String(d) }))}
				/>
				<Select
					label="Mes"
					width="9rem"
					value={parts.month}
					onChange={(month) => update({ month })}
					options={MONTHS.map((name, i) => ({ value: pad(i + 1), label: name }))}
				/>
				<Select
					label="Año"
					width="6rem"
					value={parts.year}
					onChange={(year) => update({ year })}
					options={years.map((y) => ({ value: String(y), label: String(y) }))}
				/>
				<span style={{ width: "1rem" }} />
				<Select
					label="Hora"
					width="4.5rem"
					value={parts.hour}
					onChange={(hour) => update({ hour })}
					options={range(0, 23).map((h) => ({ value: pad(h), label: pad(h) }))}
				/>
				<span className="text-base text-kumo-default" style={{ paddingBottom: "0.4rem" }}>
					:
				</span>
				<Select
					label="Minutos"
					width="4.5rem"
					value={parts.minute}
					onChange={(minute) => update({ minute })}
					options={minutes.map((m) => ({ value: m, label: m }))}
				/>
				{!required && text && (
					<button
						type="button"
						onClick={() => {
							setParts(EMPTY);
							onChange(null);
						}}
						className="h-9 rounded-lg px-3 text-sm text-kumo-subtle"
					>
						Quitar fecha
					</button>
				)}
			</div>
			<p className="text-sm leading-snug text-kumo-subtle">
				{text ? `${text} (hora de Argentina)` : "Elegí día, mes y año. La hora se carga en formato 24 h, hora de Argentina."}
			</p>
		</div>
	);
}

export const fields = {
	"fecha-hora": FechaHoraField,
};
