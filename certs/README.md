# Certificados

`supabase-ca.crt` es la cadena pública de Supabase:

- `Supabase Intermediate 2021 CA`
- `Supabase Root 2021 CA`

No es un certificado autogenerado ni una clave privada. Es la CA que usa el
pooler de Supabase para TLS (`*.pooler.supabase.com`). Node no la trae en su
almacén por defecto, por eso `astro.config.mjs` la pasa como `ssl.ca` al conectar
a `DATABASE_URL`.

Si Supabase rota esta CA, descargá la nueva desde **Dashboard → Database →
SSL Configuration** (archivo `prod-ca-2021.crt`) y reemplazá este archivo.
