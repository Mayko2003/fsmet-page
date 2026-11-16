## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## EmDash schema changes

- `seed/seed.json` is the source of truth for collections and fields. EmDash only auto-applies the seed on a fresh database, so existing databases (production Supabase) never pick up seed changes on deploy.
- After deploying a schema change, open `/_emdash/admin/plugins/fsmet-admin/sincronizar` (admin → "Sincronizar esquema") and apply the pending changes. It creates missing fields, updates labels/widgets/repeater sub-fields/order and collection names; it never deletes fields or content.
- Local SQLite: `npx emdash seed seed/seed.json --no-content --on-conflict update` (stop the dev server first), or use the same admin page.
- Local admin login without passkey (dev only): `http://localhost:4321/_emdash/api/auth/dev-bypass?redirect=/_emdash/admin`.
- The local native plugin lives in `src/emdash/fsmet-admin/` (registered in `astro.config.mjs`). `datetime` fields should use `"widget": "fsmet-admin:fecha-hora"` (day/month/year + 24 h time, Argentina time).
