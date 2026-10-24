# FSMET — Foro Social Mundial de las Economías Transformadoras

Sitio web oficial del **FSMET**, un espacio temático del Foro Social Mundial que busca
conectar experiencias de economía social, solidaria, popular, comunitaria, campesina,
indígena, cooperativa, agroecológica, de cuidados y de finanzas éticas.

La próxima edición se construye en **Argentina**, con **Jujuy y Salta** como provincias
anfitrionas. El encuentro principal comienza el **7 de abril de 2027**.

🌐 **https://fsmet.com.ar** — Disponible en español, inglés y portugués.

## Contenido del sitio

- **Hero** — presentación del proceso y cuenta regresiva al encuentro principal.
- **Quiénes somos** — descripción del proceso colectivo y los seis ejes temáticos
  (territorio y buen vivir, producción y trabajo, finanzas éticas, agroecología,
  formación y cultura, cuidados).
- **De dónde venimos** — recorrido histórico por las ediciones anteriores del foro.
- **Territorios** — mapa interactivo (Leaflet) con las experiencias y nodos territoriales.
- **Reuniones y webinarios** — agenda de encuentros previos del proceso.
- **Info útil** — alojamiento, transporte y logística para quienes participen.
- **Inscripción** — formulario de registro con verificación anti-bot
  (Cloudflare Turnstile + honeypot) y envío por correo vía SMTP (`POST /api/inscripcion`).
- **Preguntas frecuentes** y frases destacadas del proceso.

## Stack

| Herramienta | Uso |
| :-- | :-- |
| [Astro](https://astro.build) 7 | Framework principal (SSG + endpoint de API) |
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
└── src/
    ├── assets/            # Imágenes fuente (fondos, logo)
    ├── components/        # Secciones de la página (Hero, Territorios, Inscripción…)
    ├── i18n/strings.ts    # Todos los textos del sitio en es/en/pt
    ├── layouts/Layout.astro  # Layout base con SEO, Open Graph y hreflang
    ├── pages/
    │   ├── index.astro       # Español (locale por defecto, sin prefijo)
    │   ├── en/index.astro    # English → /en/
    │   ├── pt/index.astro    # Português → /pt/
    │   └── api/inscripcion.ts# Endpoint del formulario de inscripción
    ├── scripts/ui.ts      # Interactividad del lado cliente
    └── styles/global.css  # Estilos y tokens de diseño
```

## Desarrollo

```sh
pnpm install          # Instalar dependencias (requiere Node >= 22.12)
pnpm dev              # Servidor de desarrollo en localhost:4321
pnpm build            # Build de producción en ./dist/
pnpm preview          # Previsualizar el build localmente
```

Para regenerar la imagen Open Graph y el favicon a partir de los assets fuente:

```sh
node scripts/gen-images.mjs
```

## Variables de entorno

Necesarias para el formulario de inscripción. Copiar `.env.example` a `.env` y completar:

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
Analytics habilitado). El endpoint `api/inscripcion` se renderiza on-demand
(`prerender = false`); el resto del sitio es estático.
