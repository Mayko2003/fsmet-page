// Genera los assets estáticos derivados de las imágenes fuente:
//   public/img/og.jpg      — tarjeta Open Graph 1200x630 (para compartir el link)
//   public/img/favicon.png — ícono 64x64
//   public/favicon.ico     — ícono 32x32 (PNG válido como .ico; fallback de /favicon.ico)
// Uso: node scripts/gen-images.mjs
import sharp from "sharp";

await sharp("src/assets/fondo.jpg")
	.resize(1200, 630, { fit: "cover", position: "centre" })
	.jpeg({ quality: 78, mozjpeg: true })
	.toFile("public/img/og.jpg");

await sharp("src/assets/logo.png")
	.resize(64, 64)
	.png()
	.toFile("public/img/favicon.png");

await sharp("src/assets/logo.png").resize(32, 32).png().toFile("public/favicon.ico");

console.log("Generados: public/img/og.jpg, public/img/favicon.png, public/favicon.ico");
