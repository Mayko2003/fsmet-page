# FSMET — Foro Social Mundial de las Economías Transformadoras

Sitio web oficial del **FSMET**, un espacio temático del Foro Social Mundial que busca
conectar experiencias de economía social, solidaria, popular, comunitaria, campesina,
indígena, cooperativa, agroecológica, de cuidados y de finanzas éticas.

La próxima edición se construye en **Argentina**, con **Jujuy y Salta** como provincias
anfitrionas. El encuentro principal se realiza los días **7, 8 y 9 de abril de 2027**.

🌐 **https://fsmet.com.ar** — Disponible en español, inglés, portugués y francés.

## Contenido del sitio

- **Hero** — presentación del proceso y cuenta regresiva al encuentro principal.
- **Quiénes somos** — descripción del proceso colectivo y los seis ejes temáticos
  (territorio y buen vivir, producción y trabajo, finanzas éticas, agroecología,
  formación y cultura, cuidados).
- **De dónde venimos** — recorrido histórico por las ediciones anteriores del foro.
- **Territorios** — Jujuy y Salta como provincias anfitrionas.
- **Reuniones y webinarios** — agenda de encuentros previos del proceso. Los webinares
  se administran desde EmDash (`/_emdash/admin/`), sin tocar código.
- **Info útil** — cómo llegar, altura y clima, y un mapa interactivo (Leaflet)
  con hospedajes sugeridos en San Salvador de Jujuy.
- **Inscripción** — formulario de registro con verificación anti-bot
  (Cloudflare Turnstile + honeypot) y envío por correo vía SMTP (`POST /api/inscripcion`).
- **Preguntas frecuentes** y frases destacadas del proceso.

## Stack

| Herramienta | Uso |
| :-- | :-- |
| [Astro](https://astro.build) 7 | Framework principal (SSR + endpoint de API) |
| [EmDash](https://emdashcms.com) 1.4 | CMS para editar los webinares desde el navegador |
| [React](https://react.dev) 19 | UI del panel de administración de EmDash |
| [Tailwind CSS](https://tailwindcss.com) 4 | Estilos (vía `@tailwindcss/vite`) |
| [astro-icon](https://github.com/natemoo-re/astro-icon) + MDI | Íconos |
| [Leaflet](https://leafletjs.com) | Mapa de territorios |
| [nodemailer](https://nodemailer.com) | Envío de inscripciones por SMTP |
| Cloudflare Turnstile | Anti-bot del formulario |
| [sharp](https://sharp.pixelplumbing.com) | Optimización de imágenes |
| `@astrojs/vercel` | Deploy en Vercel con Web Analytics |

## Estructura del proyecto

```text
/
├── public/img/            # og.jpg, favicon y assets estáticos
├── scripts/gen-images.mjs # Genera og.jpg y favicon.png desde los assets fuente
├── seed/seed.json         # Modelo inicial de EmDash (colección «webinares»)
├── emdash-env.d.ts        # Tipos generados por EmDash (se regenera solo)
├── data.db                # SQLite local de EmDash (ignorado por git)
├── uploads/               # Imágenes subidas en local (ignorado por git)
└── src/
    ├── assets/            # Imágenes fuente (fondos, logo)
    ├── components/        # Secciones de la página (Hero, Territorios, Inscripción…)
    ├── i18n/strings.ts    # Textos fijos del sitio en es/en/pt/fr
    ├── layouts/Layout.astro  # Layout base con SEO, Open Graph y hreflang
    ├── live.config.ts     # Conecta EmDash con las Live Content Collections de Astro
    ├── pages/
    │   ├── index.astro       # Español (locale por defecto, sin prefijo)
    │   ├── en/index.astro    # English → /en/
    │   ├── pt/index.astro    # Português → /pt/
    │   ├── fr/index.astro    # Français → /fr/
    │   └── api/inscripcion.ts# Endpoint del formulario de inscripción
    ├── scripts/ui.ts      # Interactividad del lado cliente
    └── styles/global.css  # Estilos y tokens de diseño
```

## CMS (EmDash)

La sección **Reuniones webinares** se alimenta de EmDash. El panel está en:

```text
/_emdash/admin/
```

### Primer inicio (local)

1. `pnpm dev`
2. Abrir <http://localhost:4321/_emdash/admin/>.
3. Completar el asistente: título del sitio, cuenta de administración y passkey.
4. Ir a **Webinares → New Webinar** (o **Nuevo webinar**).

La persistencia depende de `.env`:

- Si `DATABASE_URL` está definida (como en este repo, apuntando al Supabase
  **FSMET EMDASH**), el contenido y los usuarios viven en Supabase.
- Si `DATABASE_URL` está vacía o comentada, EmDash usa SQLite en `./data.db` y
  guarda las imágenes en `./uploads/`. Ambos están ignorados por git.

Para reiniciar solo el entorno SQLite local, basta con borrar `data.db*` y
volver a entrar al panel. Para reiniciar Supabase, hay que limpiar el schema
`public` desde la base; no lo hagas si ya hay contenido real.

### Cómo editar un webinar

Cada entrada tiene estos campos:

| Campo | Uso |
| :-- | :-- |
| `Temática` | Título de la tarjeta |
| `Expositor/a` | Persona o equipo que expone |
| `Fecha y hora` | Fecha real; ordena la agenda y se formatea según el idioma |
| `Fecha visible` | Opcional. Si se completa, reemplaza el formato automático |
| `Descripción` | Texto breve opcional dentro de la tarjeta |
| `Imagen o banner` | Opcional. Si no se sube, usa `public/img/webinar-default.svg` |
| `Enlace de YouTube` | Si está cargado, aparece el botón de transmisión; si no, «Transmisión próximamente» |
| `Orden` | Número menor = aparece antes |

Guardar como borrador (**Save draft**) y después **Publish**. El sitio consulta la
base en cada request: los cambios publicados se ven al recargar, sin rebuild.

### Otras secciones editables

Además de los webinares, el admin tiene una carpeta **Secciones de la página** con:

| Sección | Qué se puede editar |
| :-- | :-- |
| **Hero** | Etiqueta, título, texto, botones y enlaces, subtítulo, textos de la cuenta regresiva y fecha objetivo. También admite una imagen de fondo opcional. |
| **Quiénes somos** | Etiqueta, título, los dos párrafos, cita, texto de la cita y los seis ejes temáticos (número, título, descripción y temas separados por coma). |
| **Agenda global** | Etiqueta, título, introducción y los encuentros: ícono, logo por URL o imagen subida, fecha/lugar, título, descripción, botón y enlace. |
| **Información útil** | Etiqueta, título, introducción, los tres bloques de datos (con ítems normales y “por confirmar”), textos de hospedaje y la lista de hoteles con coordenadas para el mapa. |

Cada sección es una entrada publicada por idioma. Los cambios se guardan como
borrador y se publican con **Publish changes**.

### Invitaciones y email en desarrollo

En `astro dev`, EmDash usa un proveedor de email de consola: **no envía correos**.
El admin tiene además una página privada para manejar invitaciones:

```text
http://localhost:4321/admin/invites
```

Solo es accesible para usuarios con rol **Administrador**. Permite generar links,
copiarlos, ver invitaciones pendientes y revocarlas. No envía emails: el link se
muestra en pantalla para compartirlo manualmente. En producción funciona igual.

Cuando invitás desde **Users → Invite User** en desarrollo, el link también queda
capturado en:

```text
http://localhost:4321/_emdash/api/dev/emails
```

En producción, si querés envío automático de correos, hay que configurar un
proveedor real (por ejemplo el plugin `emdash-smtp`).

### Idiomas

EmDash maneja una fila por idioma. Al crear o editar una entrada, usar el panel
**Translations** del editor para crear las versiones en inglés, portugués y francés.
Mientras un idioma no tenga traducciones, la sección muestra el contenido publicado
en español (fallback). Los textos fijos que todavía no están en el CMS siguen
viviendo en `src/i18n/strings.ts`.

## Desarrollo

```sh
pnpm install          # Instalar dependencias (requiere Node >= 22.23.4)
pnpm dev              # Servidor de desarrollo en localhost:4321
pnpm build            # Build de producción en ./dist/
```

Para previsualizar el comportamiento de Vercel en local, usar `vercel dev` (CLI de Vercel).

Para regenerar la imagen Open Graph y el favicon a partir de los assets fuente:

```sh
node scripts/gen-images.mjs
```

## Variables de entorno

Copiar `.env.example` a `.env` y completar. En local, `EMDASH_ENCRYPTION_KEY` se
genera con:

```sh
npx emdash secrets generate --write .env
```

### CMS (EmDash)

| Variable | Dónde | Descripción |
| :-- | :-- | :-- |
| `EMDASH_ENCRYPTION_KEY` | Local y producción | Cifra secretos de plugins. **Guardar copia de respaldo**: sin ella no se pueden recuperar. |
| `EMDASH_SITE_URL` | Producción | Origen público, ej. `https://fsmet.com.ar`. Necesario para passkeys y CSRF. |
| `DATABASE_URL` | Producción | Postgres (Neon, Vercel Postgres, Supabase…). En local se usa SQLite. |
| `REDIS_URL` | Producción | Redis/Upstash para sesiones del admin en Vercel. Si falta, se usa Vercel Runtime Cache. |
| `S3_ENDPOINT` … `S3_PUBLIC_URL` | Producción | Bucket S3-compatible para imágenes. En local se usa `./uploads/`. |

> **Importante:** Vercel no tiene disco persistente. En producción, sin
> `DATABASE_URL` los cambios del CMS se pierden, y sin `REDIS_URL` la sesión del
> admin puede cortarse. Configurar ambos antes de completar el setup.

### Usar Supabase

Sí, se puede usar Supabase para la persistencia. El proyecto actual es
**FSMET EMDASH** (`dnjmwqaircfppupvxbor`, región `us-west-2`) y ya está vinculado
con la CLI (`supabase link`). El estado local de la CLI queda en `supabase/.temp/`
(ignorado por git). Las credenciales locales están en `pwd.bd`, también ignorado:
no lo subas al repositorio.

- **Base de datos:** usar la cadena del **Session Pooler** (puerto `5432`), no la
  conexión directa (que es solo IPv6) ni el transaction pooler (`6543`). EmDash
  corre migraciones y advisory locks, y el modo sesión evita sorpresas:

  ```env
  DATABASE_URL=postgresql://postgres.<project-ref>:<password-url-encoded>@aws-1-<region>.pooler.supabase.com:5432/postgres
  ```

  Si la contraseña tiene caracteres especiales (`@ : / ? # & +`), hay que
  URL-encodearla. El repo incluye `certs/supabase-ca.crt`, la CA pública de
  Supabase; el código la usa para validar TLS y quita cualquier `sslmode` de la
  URL para que `pg` no descarte esa CA.

  El rol debe poder crear y alterar tablas en `public`. El usuario `postgres` de
  Supabase ya tiene esos permisos. El `pg.Pool` local está limitado a 5
  conexiones por instancia; si el plan de Supabase es chico, se puede bajar ese
  valor en `astro.config.mjs`.

- **Imágenes:** Supabase Storage expone un endpoint S3-compatible. Habilitar
  **Storage → Settings → S3 protocol**, generar un par de credenciales y crear un
  bucket. Después:

  ```env
  S3_ENDPOINT=https://<project-ref>.supabase.co/storage/v1/s3
  S3_BUCKET=emdash-media
  S3_ACCESS_KEY_ID=...
  S3_SECRET_ACCESS_KEY=...
  S3_REGION=<region-del-proyecto>
  S3_PUBLIC_URL=https://<project-ref>.supabase.co/storage/v1/object/public/emdash-media
  ```

- **Sesiones:** Supabase no ofrece Redis. Para el admin seguirá haciendo falta
  `REDIS_URL` (Upstash desde el Marketplace de Vercel) o aceptar el fallback a
  Vercel Runtime Cache.

> En el plan gratuito, Supabase pausa el proyecto por inactividad y el primer
> request puede tardar en despertar. Para un sitio en producción conviene un plan
> pago o mantenerlo activo.

### Formulario de inscripción

| Variable | Descripción |
| :-- | :-- |
| `SMTP_HOST` / `SMTP_PORT` | Servidor SMTP que envía los correos |
| `SMTP_USER` / `SMTP_PASS` | Credenciales de la cuenta remitente |
| `MAIL_RECIPIENT` | Correo que recibe las inscripciones (por defecto: `SMTP_USER`) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Site key pública de Cloudflare Turnstile |
| `TURNSTILE_SECRET_KEY` | Secret key de Turnstile (solo servidor) |

Si las claves de Turnstile no están configuradas, el widget no se renderiza y la
verificación se omite. El formulario además incluye un campo honeypot contra bots.

## Deploy

El sitio se despliega en **Vercel** mediante el adapter `@astrojs/vercel` (con Web
Analytics habilitado). EmDash necesita SSR, así que todo el sitio se renderiza
on-demand; el endpoint `api/inscripcion` mantiene `prerender = false`.

### Checklist de producción

1. Crear una base **Postgres** (Neon es la opción más directa en Vercel) y cargar
   `DATABASE_URL` en las variables del proyecto. El rol debe poder crear y alterar
   tablas en el schema `public`.
2. Crear **Upstash Redis** desde el Marketplace de Vercel y cargar `REDIS_URL`.
3. Crear un bucket **S3-compatible** (Cloudflare R2, AWS S3 o MinIO) y cargar
   `S3_ENDPOINT`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`,
   `S3_REGION` y, si existe, `S3_PUBLIC_URL`.
4. Cargar `EMDASH_ENCRYPTION_KEY` (el mismo valor del `.env` local, o uno nuevo
   generado y respaldado) y `EMDASH_SITE_URL=https://fsmet.com.ar`.
5. Hacer deploy. En la primera visita a `https://fsmet.com.ar/_emdash/admin/`,
   completar el asistente y registrar la passkey del administrador.
6. Crear/editar un webinar, publicarlo y verificar que aparezca en la home.

Con `output: "server"`, el HTML se genera en cada request. Si más adelante se
quiere volver a estático para el resto de la página, se puede evaluar cachear la
home o prerenderizar secciones que no dependan del CMS.
