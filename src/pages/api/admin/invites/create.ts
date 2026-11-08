import { createInviteToken, InviteError, Role } from "@emdash-cms/auth";
import { createKyselyAdapter } from "@emdash-cms/auth/adapters/kysely";

export const prerender = false;

const ALLOWED_ROLES = new Set<number>([
	Role.CONTRIBUTOR,
	Role.AUTHOR,
	Role.EDITOR,
	Role.ADMIN,
]);

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST({ request, locals, url }: any) {
	const user = locals.user as { id: string; role: number } | undefined;

	if (!user || user.role < Role.ADMIN) {
		return json({ success: false, error: "Solo un administrador puede generar invitaciones." }, 403);
	}

	const db = locals.emdash?.db;

	if (!db) {
		return json({ success: false, error: "EmDash no está inicializado." }, 500);
	}

	let body: { email?: string; role?: number };

	try {
		body = await request.json();
	} catch {
		return json({ success: false, error: "Cuerpo inválido." }, 400);
	}

	const email = (body.email ?? "").trim().toLowerCase();
	const role = Number(body.role);

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ success: false, error: "Ingresá un correo válido." }, 400);
	}

	if (!ALLOWED_ROLES.has(role)) {
		return json({ success: false, error: "Rol inválido." }, 400);
	}

	try {
		// Revoca cualquier invitación anterior para ese correo antes de crear
		// una nueva, así el link que mostramos es el único vigente.
		await db
			.deleteFrom("auth_tokens")
			.where("email", "=", email)
			.where("type", "=", "invite")
			.execute();

		const adapter = createKyselyAdapter(db);
		const publicOrigin = (process.env.EMDASH_SITE_URL || url.origin).replace(/\/$/, "");
		const baseUrl = `${publicOrigin}/_emdash`;

		const result = await createInviteToken(
			{ baseUrl },
			adapter,
			email,
			role as any,
			user.id,
		);

		return json({ success: true, email: result.email, url: result.url });
	} catch (error) {
		if (error instanceof InviteError) {
			return json({ success: false, error: error.message, code: error.code }, 400);
		}

		console.error("[admin/invites] No se pudo crear la invitación:", error);
		return json({ success: false, error: "No se pudo generar el link." }, 500);
	}
}
