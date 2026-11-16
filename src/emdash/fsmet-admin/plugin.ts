import { definePlugin } from "emdash";

export interface FsmetAdminOptions {
	adminEntry: string;
}

export function createPlugin(options: FsmetAdminOptions) {
	return definePlugin({
		id: "fsmet-admin",
		version: "0.1.0",
		admin: {
			entry: options.adminEntry,
			pages: [{ path: "/sincronizar", label: "Sincronizar esquema", icon: "arrows-clockwise" }],
			fieldWidgets: [{ name: "fecha-hora", label: "Fecha y hora (24 h, Argentina)", fieldTypes: ["datetime"] }],
		},
	});
}
