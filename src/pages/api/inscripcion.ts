import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const transporter = nodemailer.createTransport({
	host: import.meta.env.SMTP_HOST,
	port: Number(import.meta.env.SMTP_PORT ?? 465),
	secure: Number(import.meta.env.SMTP_PORT ?? 465) === 465,
	auth: {
		user: import.meta.env.SMTP_USER,
		pass: import.meta.env.SMTP_PASS,
	},
});

const MAIL_RECIPIENT = import.meta.env.MAIL_RECIPIENT ?? import.meta.env.SMTP_USER;
const TURNSTILE_SECRET = import.meta.env.TURNSTILE_SECRET_KEY;

async function verificarTurnstile(token: string, ip: string | null) {
	if (!TURNSTILE_SECRET) return true;
	const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			secret: TURNSTILE_SECRET,
			response: token,
			...(ip ? { remoteip: ip } : {}),
		}),
	});
	const resultado = (await res.json()) as { success?: boolean };
	return resultado.success === true;
}

const escapeHtml = (value: string) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");

const json = (body: Record<string, unknown>, status: number) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});

export const POST: APIRoute = async ({ request }) => {
	const data = Object.fromEntries((await request.formData()).entries());

	// Honeypot: los bots lo completan, los humanos no lo ven
	if (data.website) return json({ ok: true }, 200);

	const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
	const token = typeof data["cf-turnstile-response"] === "string" ? data["cf-turnstile-response"] : "";
	if (!(await verificarTurnstile(token, ip))) {
		return json({ ok: false, error: "Verificación anti-bot fallida." }, 403);
	}

	const { nombre, email, territorio, organizacion, rol } = data;

	if (
		typeof nombre !== "string" ||
		typeof email !== "string" ||
		typeof territorio !== "string" ||
		typeof rol !== "string" ||
		!nombre.trim() ||
		!email.trim() ||
		!territorio.trim() ||
		!["oyente", "expositor"].includes(rol)
	) {
		return json({ ok: false, error: "Faltan campos obligatorios." }, 400);
	}

	const filas: [string, string][] = [
		["Rol", rol === "expositor" ? "Expositor/a" : "Oyente"],
		["Idioma", typeof data.lang === "string" ? data.lang : "es"],
		["Nombre", nombre],
		["Correo", email],
		["Territorio / país", territorio],
		["Organización o comunidad", typeof organizacion === "string" ? organizacion : ""],
	];

	if (rol === "expositor") {
		const { titulo_exposicion, aporte, eje, resumen } = data;
		if (
			typeof titulo_exposicion !== "string" ||
			typeof aporte !== "string" ||
			typeof eje !== "string" ||
			typeof resumen !== "string" ||
			!titulo_exposicion.trim() ||
			!aporte.trim() ||
			!eje.trim() ||
			!resumen.trim()
		) {
			return json({ ok: false, error: "Faltan datos de la exposición." }, 400);
		}
		filas.push(
			["Título de la exposición", titulo_exposicion],
			["Tipo de aporte", aporte],
			["Eje temático", eje],
			["Resumen", resumen],
			["Publicar en directorio", data.consentir_publicar === "si" ? "Sí" : "No"],
		);
	}

	const html = `
		<h2>Nueva inscripción — FSMET</h2>
		<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif">
			${filas
				.map(
					([label, value]) => `<tr>
						<td style="border:1px solid #ddd;font-weight:bold;vertical-align:top">${escapeHtml(label)}</td>
						<td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value || "—")}</td>
					</tr>`,
				)
				.join("")}
		</table>
	`;

	try {
		await transporter.sendMail({
			from: import.meta.env.SMTP_USER,
			to: MAIL_RECIPIENT,
			replyTo: email,
			subject: `[FSMET] Inscripción ${rol === "expositor" ? "expositor/a" : "oyente"} — ${nombre}`,
			html,
		});
	} catch (err) {
		console.error("SMTP error:", err);
		return json({ ok: false, error: "No se pudo enviar la inscripción." }, 502);
	}

	return json({ ok: true }, 200);
};
