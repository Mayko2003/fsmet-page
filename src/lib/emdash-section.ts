import { getEmDashCollection } from "emdash";

/**
 * Carga una colección "singleton" (hero, about, agenda, info) en el idioma
 * actual y cae al español si todavía no hay traducción.
 */
export async function getSection<T>(
	collection: "hero" | "about" | "agenda" | "info",
	locale: string | undefined,
): Promise<T | null> {
	const current = locale ?? "es";

	const query = (queryLocale: string) =>
		getEmDashCollection(collection, { locale: queryLocale, limit: 1 });

	let { entries, error } = await query(current);

	if (!error && entries.length === 0 && current !== "es") {
		({ entries, error } = await query("es"));
	}

	if (error) {
		console.error(`[emdash] No se pudo cargar la sección "${collection}":`, error);
		return null;
	}

	return (entries[0]?.data as T) ?? null;
}

export function lines(value: string | null | undefined): string[] {
	return (value ?? "")
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
}

export function commas(value: string | null | undefined): string[] {
	return (value ?? "")
		.split(",")
		.map((item) => item.trim())
		.filter(Boolean);
}
