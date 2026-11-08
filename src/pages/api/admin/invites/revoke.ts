import { Role } from "@emdash-cms/auth";

export const prerender = false;

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST({ request, locals }: any) {
	const user = locals.user as { id: string; role: number } | undefined;

	if (!user || user.role < Role.ADMIN) {
		return json({ success: false, error: "Solo un administrador puede revocar invitaciones." }, 403);
	}

	const db = locals.emdash?.db;

	if (!db) {
		return json({ success: false, error: "EmDash no está inicializado." }, 500);
	}

	let body: { email?: string };

	try {
		body = await request.json();
	} catch {
		return json({ success: false, error: "Cuerpo inválido." }, 400);
	}

	const email = (body.email ?? "").trim().toLowerCase();

	if (!email) {
		return json({ success: false, error: "Falta el correo." }, 400);
	}

	try {
		const result = await db
			.deleteFrom("auth_tokens")
			.where("email", "=", email)
			.where("type", "=", "invite")
			.executeTakeFirst();

		return json({ success: true, deleted: Number(result?.numDeletedRows ?? 0) });
	} catch (error) {
		console.error("[admin/invites] No se pudo revocar la invitación:", error);
		return json({ success: false, error: "No se pudo revocar la invitación." }, 500);
	}
}
