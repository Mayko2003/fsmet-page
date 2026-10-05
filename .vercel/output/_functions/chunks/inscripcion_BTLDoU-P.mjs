import { r as __exportAll } from "./rolldown-runtime_DWOOXAbm.mjs";
import { Resend } from "resend";
//#region src/pages/api/inscripcion.ts
var inscripcion_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var resend = new Resend(void 0);
var MAIL_TO = void 0;
var MAIL_FROM = "FSMET <onboarding@resend.dev>";
var escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
var json = (body, status) => new Response(JSON.stringify(body), {
	status,
	headers: { "Content-Type": "application/json" }
});
var POST = async ({ request }) => {
	const data = Object.fromEntries((await request.formData()).entries());
	if (data.website) return json({ ok: true }, 200);
	const { nombre, email, territorio, organizacion, rol } = data;
	if (typeof nombre !== "string" || typeof email !== "string" || typeof territorio !== "string" || typeof rol !== "string" || !nombre.trim() || !email.trim() || !territorio.trim() || !["oyente", "expositor"].includes(rol)) return json({
		ok: false,
		error: "Faltan campos obligatorios."
	}, 400);
	const filas = [
		["Rol", rol === "expositor" ? "Expositor/a" : "Oyente"],
		["Nombre", nombre],
		["Correo", email],
		["Territorio / país", territorio],
		["Organización o comunidad", typeof organizacion === "string" ? organizacion : ""]
	];
	if (rol === "expositor") {
		const { titulo_exposicion, aporte, eje, resumen } = data;
		if (typeof titulo_exposicion !== "string" || typeof aporte !== "string" || typeof eje !== "string" || typeof resumen !== "string" || !titulo_exposicion.trim() || !aporte.trim() || !eje.trim() || !resumen.trim()) return json({
			ok: false,
			error: "Faltan datos de la exposición."
		}, 400);
		filas.push(["Título de la exposición", titulo_exposicion], ["Tipo de aporte", aporte], ["Eje temático", eje], ["Resumen", resumen]);
	}
	const html = `
		<h2>Nueva inscripción — FSMET</h2>
		<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif">
			${filas.map(([label, value]) => `<tr>
						<td style="border:1px solid #ddd;font-weight:bold;vertical-align:top">${escapeHtml(label)}</td>
						<td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value || "—")}</td>
					</tr>`).join("")}
		</table>
	`;
	const { error } = await resend.emails.send({
		from: MAIL_FROM,
		to: MAIL_TO,
		replyTo: email,
		subject: `[FSMET] Inscripción ${rol === "expositor" ? "expositor/a" : "oyente"} — ${nombre}`,
		html
	});
	if (error) {
		console.error("Resend error:", error);
		return json({
			ok: false,
			error: "No se pudo enviar la inscripción."
		}, 502);
	}
	return json({ ok: true }, 200);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/inscripcion@_@ts
var page = () => inscripcion_exports;
//#endregion
export { page };
