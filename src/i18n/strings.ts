export const LOCALES = ["es", "en", "pt", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

// Nombre nativo de cada idioma (independiente del locale activo)
export const LOCALE_NAMES: Record<string, string> = {
	es: "Español",
	en: "English",
	pt: "Português",
	fr: "Français",
};

const es = {
	meta: {
		title: "FSMET — Foro Social Mundial de las Economías Transformadoras",
		description:
			"Proceso colectivo y territorial para conectar experiencias de economías transformadoras. Próxima edición en Argentina, con Jujuy y Salta como provincias anfitrionas.",
		ogLocale: "es_AR",
		skip: "Saltar al contenido",
	},
	nav: {
		tagline: "Economías transformadoras",
		links: [
			{ href: "#quienes-somos", label: "Quiénes somos" },
			{ href: "#de-donde-venimos", label: "De dónde venimos" },
			{ href: "#territorios", label: "Territorios" },
			{ href: "#reuniones", label: "Reuniones" },
			{ href: "#info-util", label: "Info útil" },
			{ href: "#preguntas", label: "Preguntas" },
		],
		participar: "Participar",
		menuOpen: "Abrir menú",
		menuClose: "Cerrar menú",
		langLabel: "Idioma",
	},
	hero: {
		badge: "Foro Social Mundial · proceso territorial",
		title: "De las alternativas dispersas a las convergencias territoriales",
		text: "El Foro Social Mundial de las Economías Transformadoras es un espacio temático del FSM. La próxima edición se construye en Argentina, con Jujuy y Salta como provincias anfitrionas.",
		ctaPrimary: "Conocer el proceso",
		ctaSecondary: "Sumarse",
		subtitle: "FSMET 2027 · Jujuy y Salta",
		logoAlt: "Identidad visual del FSMET: territorio, encuentro y red",
		countdown: {
			label: "El encuentro principal comienza en",
			units: ["días", "horas", "min", "seg"],
			date: "7, 8 y 9 de abril de 2027 · Jujuy y Salta",
		},
	},
	quienes: {
		label: "Quiénes somos",
		h2: "Un proceso colectivo, no solamente un evento",
		p1: "El FSMET busca conectar experiencias de economía social, solidaria, popular, comunitaria, campesina, indígena, cooperativa, agroecológica, de cuidados y de finanzas éticas. El problema no es la falta de alternativas: es que muchas siguen aisladas.",
		p2: "La idea es construir una minga global: un encuentro donde confluimos organizaciones de base, territorios, movimientos, comunidades e instituciones. El proceso empieza antes del encuentro principal y continúa después.",
		quote: "“Del proyecto al ecosistema.”",
		quoteCaption:
			"Organización responsable de la preparación: Movimiento Hacia Otra Economía, Social Solidaria Popular Campesino Indígena, Afrodescendiente. Se está conformando un equipo de gobernanza para el proceso.",
		ejesTitle: "Seis ejes temáticos",
		ejes: [
			{
				n: "01",
				title: "Economía, Territorio y Buen Vivir",
				text: "Desarrollo territorial, comunidad, inclusión y sostenibilidad de la vida.",
				temas: ["Economía transformadora", "Territorio", "Buen Vivir", "Comunidad", "Inclusión"],
			},
			{
				n: "02",
				title: "Producción, Trabajo y Tramas",
				text: "Cooperativas, circuitos cortos y articulación entre productoras y productores.",
				temas: ["Cooperativas", "Redes productivas", "Circuitos cortos", "Trabajo", "Articulación"],
			},
			{
				n: "03",
				title: "Finanzas Éticas y Redistribución",
				text: "Crédito, fondos rotatorios, bancos comunitarios y educación financiera.",
				temas: ["Crédito", "Fondos rotatorios", "Bancos comunitarios", "Educación financiera"],
			},
			{
				n: "04",
				title: "Agroecología y Transición Ecológica",
				text: "Bienes comunes, bioinsumos, ambiente y producción sustentable.",
				temas: ["Agroecología", "Bioinsumos", "Bienes comunes", "Soberanía alimentaria"],
			},
			{
				n: "05",
				title: "Formación, Cultura y Sentido Común",
				text: "Conocimientos territoriales, investigación, comunicación y educación.",
				temas: ["Educación", "Conocimientos territoriales", "Investigación", "Comunicación"],
			},
			{
				n: "06",
				title: "Políticas Públicas e Incidencia",
				text: "Propuestas, articulación con instituciones y marcos legislativos.",
				temas: ["Legislación", "Incidencia institucional", "Propuestas", "Gobiernos"],
			},
		],
	},
	marcha: {
		label: "El proceso en marcha",
		h2: "Espacios que ya caminan",
		intro: "El FSMET no empieza en abril de 2027: diálogos mensuales, un doctorado internacional y un comité de coordinación ya están moviendo el proceso.",
		items: [
			{
				icon: "mdi:forum-outline",
				meta: "Mensual · virtual",
				title: "Diálogos Globales",
				text: "Encuentros mensuales entre el FSM, el FSMET y otros foros globales para debatir ideas, elaborar propuestas y compartir acciones. Iniciativa de la Cátedra Global de la Universidad Cooperativa del Buen Vivir.",
				cta: "Ver diálogos",
				url: "https://www.otraeconomia.com/di%C3%A1logos-globales-fsmet/?preview_sid=635060",
			},
			{
				icon: "mdi:school-outline",
				meta: "Formación · 14 meses · inscripción abierta",
				title: "Doctorado Economías Transformadoras",
				text: "Doctorado internacional acordado en la asamblea de Palpalá: formación e investigación-acción desde las prácticas territoriales, con módulos asincrónicos. Sin títulos previos requeridos.",
				cta: "Conocer el doctorado",
				url: "https://www.otraeconomia.com/?preview_sid=271675",
			},
			{
				icon: "mdi:account-group-outline",
				meta: "~200 organizaciones · 30+ países",
				title: "Comité Coordinación Internacional",
				text: "El espacio que coordina el proceso hacia el FSMET 2027: organizaciones, movimientos sociales, universidades y redes de economías transformadoras de todo el mundo.",
				cta: "Ver el comité",
				url: "https://www.otraeconomia.com/comit%C3%A9-coordinaci%C3%B3n-internacional-fsmet-2027-y-pre-m%C3%A9xico/",
			},
		],
	},
	venimos: {
		label: "De dónde venimos",
		h2: "Una historia de encuentros que se vuelve territorio",
		intro: "El FSMET es un espacio temático del Foro Social Mundial. Cada edición suma memorias, organizaciones y tramas. La edición argentina se ancla en el norte, con Jujuy y Salta como anfitrionas.",
		hitos: [
			{
				when: "2020",
				where: "Barcelona",
				text: "Primera edición del FSMET. Punto de partida internacional del proceso.",
			},
			{
				when: "2024",
				where: "Colombia",
				text: "Segunda edición. Consolidación de redes y aprendizajes territoriales.",
			},
			{
				when: "Asamblea",
				where: "Decisión colectiva",
				text: "La Asamblea del FSMET resolvió realizar una tercera edición en Argentina.",
			},
			{
				when: "2025",
				where: "Salta y Palpalá / Jujuy",
				text: "Asambleas territoriales que definieron a Jujuy y Salta como provincias anfitrionas.",
			},
			{
				when: "Desde sept. 2025",
				where: "Proceso nacional",
				text: "Reuniones presenciales periódicas. Se trabaja desde experiencias concretas: microcréditos, bioinsumos, agroecología, turismo rural, reciclaje y cuidados.",
			},
			{
				when: "24–26 nov. 2026",
				where: "México · Pre-FSMET",
				text: "Pre-FSMET 2026 en México: círculos de la palabra territoriales (24 y 25 nov., formato híbrido) y jornada de propuestas en el Congreso de la Unión, CDMX (26 nov.), bajo el lema «Construyendo alternativas solidarias».",
			},
			{
				when: "7–9 de abril de 2027",
				where: "Jujuy y Salta",
				text: "Encuentro principal del FSMET 2027: tres jornadas. Sedes y cronograma de cada fecha por confirmar.",
			},
		],
	},
	territorios: {
		label: "Territorios",
		h2: "Jujuy y Salta, provincias anfitrionas",
		intro: "La edición argentina se ancla en el norte. El territorio no es solo el lugar del encuentro: es donde viven las experiencias que el proceso quiere conectar.",
		badge: "Provincia anfitriona",
		cards: [
			{
				nombre: "Jujuy",
				texto: "La asamblea territorial de Palpalá (2025) reunió a organizaciones, comunidades e instituciones y definió a Jujuy como provincia anfitriona.",
			},
			{
				nombre: "Salta",
				texto: "La asamblea territorial de Salta (2025) consolidó el proceso provincial y la definió como coanfitriona de la tercera edición del FSMET.",
			},
		],
		footnote: "Proceso preparatorio en curso · sedes y logística por confirmar.",
	},
	reuniones: {
		label: "Reuniones webinares",
		h2: "El proceso también se construye en línea",
		intro: "Ciclo de encuentros virtuales abiertos que acompañan el camino hacia el foro, desde octubre de 2026 hasta el encuentro principal de abril de 2027. Se transmiten en vivo por YouTube.",
		webinar: "Webinar",
		live: "Ver transmisión en vivo",
		soon: "Transmisión próximamente",
		pending: "Por confirmar",
		empty: "Muy pronto",
		emptyText:
			"Estamos preparando el ciclo de webinarios que acompañará el camino hacia el foro. Las fechas, temáticas y links de transmisión se anunciarán aquí.",
		items: [],
	},
	agenda: {
		label: "Agenda global",
		h2: "Otros encuentros del ecosistema",
		intro: "El FSMET es parte de un ecosistema global de foros y procesos de economías transformadoras. Estos son otros encuentros que también están en marcha.",
		items: [
			{
				icon: "mdi:earth",
				logo: "/img/maricagsef2027-es.webp",
				meta: "9–12 oct. 2027 · Maricá, Brasil",
				title: "MaricáGSEF2027 — Foro Global de la Economía Social y Solidaria",
				text: "8.ª edición del foro bienal del GSEF, coorganizado con la Prefeitura de Maricá. Reúne gobiernos locales y nacionales, redes, instituciones y actores de la ESS de todo el mundo.",
				cta: "Conocer el foro",
				url: "https://www.gsef-net.org/es/maricagsef2027",
			},
		],
	},
	infoutil: {
		label: "Información útil",
		h2: "Llegar y quedarse en el territorio",
		intro: "Datos prácticos para planear el viaje a Jujuy y Salta. Esta sección se completa a medida que se confirmen sedes, logística y alojamientos.",
		pending: "Por confirmar",
		bloques: [
			{
				icon: "mdi:airplane",
				title: "Cómo llegar",
				items: [
					{ text: "Aeropuerto Gdor. Horacio Guzmán (JUJ), en El Cadillal, a ~33 km de San Salvador de Jujuy." },
					{ text: "Aeropuerto Martín Miguel de Güemes (SLA), a ~10 km de la ciudad de Salta." },
					{ text: "Ambas capitales cuentan con terminales de ómnibus con conexiones desde todo el país." },
				],
			},
			{
				icon: "mdi:routes",
				title: "Rutas y traslados",
				items: [
					{ text: "San Salvador de Jujuy ↔ Salta capital: ~90 km por RN9 (cornisa) o RN34." },
					{ text: "Traslados oficiales entre sedes y horarios sugeridos.", pendiente: true },
				],
			},
			{
				icon: "mdi:terrain",
				title: "Altura y clima",
				items: [
					{ text: "San Salvador de Jujuy y Salta capital están a ~1.200 msnm; abril es templado y seco." },
					{ text: "Si recorrés la Quebrada de Humahuaca o la Puna (2.000 a 3.700 msnm), prevé un día de aclimatación." },
				],
			},
		],
		hospedaje: {
			title: "Hospedaje",
			text: "El mapa muestra hoteles del microcentro de San Salvador de Jujuy como referencia inicial. Convenios, tarifas especiales y distancia a la sede final se publican cuando estén confirmados.",
			pendingItems: [
				"Opciones solidarias y alojamiento comunitario",
				"Hospedaje en Salta capital",
			],
			legendHotel: "Hospedaje sugerido",
			legendCity: "Ciudad anfitriona",
			listTitle: "Hospedajes en el microcentro",
		},
		hoteles: [
			{ detalle: "Güemes 864 · 4★ · salones de eventos" },
			{ detalle: "Av. 19 de Abril 687 · 4★ superior · frente al parque Xibi-Xibi" },
			{ detalle: "Ramírez de Velazco 244 · spa · salón de convenciones" },
			{ detalle: "Belgrano 1263 · 3★ · microcentro" },
			{ detalle: "Boutique · a metros de Plaza Belgrano y la Catedral" },
			{ detalle: "Alvear 627 · desayuno incluido · a 300 m del Cabildo" },
			{ detalle: "Alvear 1230 · opción económica · desayuno y Wi-Fi" },
		],
	},
	preguntas: {
		label: "Preguntas frecuentes",
		h2: "Lo que suele preguntarse",
		items: [
			{
				q: "¿Qué es el FSMET?",
				a: "Un espacio temático del Foro Social Mundial dedicado a las economías transformadoras. Conecta experiencias de economía social, solidaria, popular, cooperativa, agroecológica, de cuidados y de finanzas éticas que hoy funcionan de manera aislada.",
			},
			{
				q: "¿Es un evento o un proceso?",
				a: "Un proceso. El encuentro principal es un momento dentro de un camino que empieza antes —asambleas, intercambio y sistematización de experiencias— y continúa después con redes, propuestas y acción colectiva.",
			},
			{
				q: "¿Quién puede participar?",
				a: "Organizaciones sociales, cooperativas, comunidades, productoras y productores, universidades e investigadores, estudiantes, gobiernos locales, instituciones y redes nacionales e internacionales.",
			},
			{
				q: "¿Qué es una economía transformadora?",
				a: "Un término amplio que incluye economía social y solidaria, economía popular, cooperativismo, producción comunitaria, agroecología, soberanía alimentaria, sistemas de cuidados, finanzas éticas, circuitos cortos y otras prácticas que ponen la vida y el territorio en el centro.",
			},
			{
				q: "¿Cuándo y dónde es el encuentro?",
				a: "El encuentro principal se realiza los días 7, 8 y 9 de abril de 2027 en Jujuy y Salta. Las sedes y el cronograma de cada jornada se anunciarán cuando estén confirmados.",
			},
			{
				q: "¿Por qué Jujuy y Salta?",
				a: "La Asamblea del FSMET decidió realizar la tercera edición en Argentina, y las asambleas territoriales de 2025 en Salta y Palpalá definieron a Jujuy y Salta como provincias anfitrionas.",
			},
			{
				q: "¿Qué pasa después del encuentro?",
				a: "La idea es que el foro no termine cuando termina el encuentro: se buscan grupos de trabajo, redes, campañas comunes, propuestas de políticas públicas y mecanismos de seguimiento.",
			},
		],
		footerText: "¿Tenés otra duda o querés sumar tu experiencia?",
		footerLink: "Escribinos desde el formulario",
	},
	inscripcion: {
		label: "Inscripción",
		h2: "Sumarse al proceso",
		introPre: "Podés sumarte como",
		introExpositor: "expositor/a",
		introMid: "—presentando una experiencia, investigación o propuesta— o como",
		introOyente: "oyente",
		introPost: ", participando de las reuniones y del encuentro. El canal oficial sigue en construcción: este formulario registra interés para el proceso preparatorio.",
		bullets: [
			"Organizaciones, cooperativas y comunidades territoriales",
			"Universidades, equipos de investigación y formación",
			"Gobiernos locales e instituciones públicas",
		],
		legend: "¿Cómo querés participar?",
		rolOyente: { title: "Asisto como oyente", desc: "Quiero participar de las reuniones y del encuentro" },
		rolExpositor: { title: "Soy expositor/a", desc: "Presento una experiencia, investigación o propuesta" },
		fields: {
			nombre: "Nombre y apellido",
			email: "Correo",
			territorio: "Territorio / país",
			organizacion: "Organización o comunidad",
			opcional: "(opcional)",
		},
		expo: {
			title: "Datos de la exposición",
			titulo: "Título de la exposición",
			aporte: "Tipo de aporte",
			elegir: "Elegir…",
			aportes: [
				"Investigación / conocimiento",
				"Experiencia práctica / gestión",
				"Formación / educación popular",
				"Activismo / organización comunitaria",
				"Incidencia política / normativa",
				"Innovación productiva / tecnológica",
			],
			eje: "Eje temático",
			ejes: [
				"Economía, Territorio y Buen Vivir",
				"Producción, Trabajo y Tramas socioproductivas",
				"Finanzas Éticas, Crédito y Redistribución",
				"Agroecología, Ambiente y Transición Ecológica",
				"Formación, Cultura y Cambio de sentido común",
				"Políticas Públicas e Incidencia",
			],
			resumen: "Resumen de la exposición",
			consentimiento:
				"Acepto que mi experiencia aparezca en el directorio de experiencias del proceso",
		},
		submit: "Participar",
		sending: "Enviando…",
		ok: "Gracias, recibimos tu inscripción. El equipo del proceso se va a poner en contacto.",
		errInvalid: "Revisá el formulario: faltan campos obligatorios para el rol que elegiste.",
		errTurnstile: "Completá la verificación anti-bot.",
		errSend: "No se pudo enviar la inscripción. Intentá de nuevo en unos minutos.",
	},
	footer: {
		desc: "Foro Social Mundial de las Economías Transformadoras. Jujuy y Salta, Argentina.",
		rights: "Todos los derechos reservados",
		findUs: "Encontranos en:",
		soon: "próximamente",
		channels: "Canales oficiales próximamente.",
		building: "Proceso en construcción. Memoria, red y territorio.",
	},
};

export type Strings = typeof es;

const en: Strings = {
	meta: {
		title: "FSMET — World Social Forum of Transformative Economies",
		description:
			"A collective, territorial process connecting transformative economy experiences. Next edition in Argentina, hosted by the provinces of Jujuy and Salta.",
		ogLocale: "en_US",
		skip: "Skip to content",
	},
	nav: {
		tagline: "Transformative economies",
		links: [
			{ href: "#quienes-somos", label: "Who we are" },
			{ href: "#de-donde-venimos", label: "Where we come from" },
			{ href: "#territorios", label: "Territories" },
			{ href: "#reuniones", label: "Meetings" },
			{ href: "#info-util", label: "Useful info" },
			{ href: "#preguntas", label: "FAQ" },
		],
		participar: "Participate",
		menuOpen: "Open menu",
		menuClose: "Close menu",
		langLabel: "Language",
	},
	hero: {
		badge: "World Social Forum · territorial process",
		title: "From scattered alternatives to territorial convergences",
		text: "The World Social Forum of Transformative Economies is a thematic space of the WSF. The next edition is being built in Argentina, with Jujuy and Salta as host provinces.",
		ctaPrimary: "Learn about the process",
		ctaSecondary: "Join us",
		subtitle: "FSMET 2027 · Jujuy & Salta",
		logoAlt: "FSMET visual identity: territory, gathering and network",
		countdown: {
			label: "The main gathering begins in",
			units: ["days", "hours", "min", "sec"],
			date: "April 7–9, 2027 · Jujuy and Salta",
		},
	},
	quienes: {
		label: "Who we are",
		h2: "A collective process, not just an event",
		p1: "The FSMET seeks to connect experiences of social, solidarity, popular, community, peasant, indigenous, cooperative, agroecological, care and ethical-finance economies. The problem is not a lack of alternatives: it is that many remain isolated.",
		p2: "The idea is to build a global minga: a gathering where grassroots organizations, territories, movements, communities and institutions converge. The process begins before the main gathering and continues afterwards.",
		quote: "“From project to ecosystem.”",
		quoteCaption:
			"Organization responsible for the preparation: Movimiento Hacia Otra Economía, Social Solidaria Popular Campesino Indígena, Afrodescendiente. A governance team for the process is being formed.",
		ejesTitle: "Six thematic axes",
		ejes: [
			{
				n: "01",
				title: "Economy, Territory and Buen Vivir",
				text: "Territorial development, community, inclusion and the sustainability of life.",
				temas: ["Transformative economy", "Territory", "Buen Vivir", "Community", "Inclusion"],
			},
			{
				n: "02",
				title: "Production, Work and Networks",
				text: "Cooperatives, short supply chains and articulation between producers.",
				temas: ["Cooperatives", "Productive networks", "Short supply chains", "Work", "Articulation"],
			},
			{
				n: "03",
				title: "Ethical Finance and Redistribution",
				text: "Credit, rotating funds, community banks and financial education.",
				temas: ["Credit", "Rotating funds", "Community banks", "Financial education"],
			},
			{
				n: "04",
				title: "Agroecology and Ecological Transition",
				text: "Commons, bio-inputs, environment and sustainable production.",
				temas: ["Agroecology", "Bio-inputs", "Commons", "Food sovereignty"],
			},
			{
				n: "05",
				title: "Education, Culture and Common Sense",
				text: "Territorial knowledge, research, communication and education.",
				temas: ["Education", "Territorial knowledge", "Research", "Communication"],
			},
			{
				n: "06",
				title: "Public Policy and Advocacy",
				text: "Proposals, articulation with institutions and legislative frameworks.",
				temas: ["Legislation", "Institutional advocacy", "Proposals", "Governments"],
			},
		],
	},
	marcha: {
		label: "The process in motion",
		h2: "Spaces already moving",
		intro: "The FSMET doesn't start in April 2027: monthly dialogues, an international doctorate and a coordination committee are already moving the process forward.",
		items: [
			{
				icon: "mdi:forum-outline",
				meta: "Monthly · online",
				title: "Global Dialogues",
				text: "Monthly meetings between the WSF, the FSMET and other global forums to debate ideas, develop proposals and share actions. An initiative of the Global Chair of the Universidad Cooperativa del Buen Vivir.",
				cta: "See the dialogues",
				url: "https://www.otraeconomia.com/di%C3%A1logos-globales-fsmet/?preview_sid=635060",
			},
			{
				icon: "mdi:school-outline",
				meta: "Education · 14 months · enrollment open",
				title: "Transformative Economies Doctorate",
				text: "International doctorate agreed at the Palpalá assembly: education and action-research rooted in territorial practices, with asynchronous modules. No prior academic degrees required.",
				cta: "Learn about the doctorate",
				url: "https://www.otraeconomia.com/?preview_sid=271675",
			},
			{
				icon: "mdi:account-group-outline",
				meta: "~200 organizations · 30+ countries",
				title: "International Coordination Committee",
				text: "The space coordinating the process towards FSMET 2027: organizations, social movements, universities and transformative economy networks from around the world.",
				cta: "See the committee",
				url: "https://www.otraeconomia.com/comit%C3%A9-coordinaci%C3%B3n-internacional-fsmet-2027-y-pre-m%C3%A9xico/",
			},
		],
	},
	venimos: {
		label: "Where we come from",
		h2: "A history of gatherings that becomes territory",
		intro: "The FSMET is a thematic space of the World Social Forum. Each edition adds memories, organizations and networks. The Argentine edition is anchored in the north, with Jujuy and Salta as hosts.",
		hitos: [
			{
				when: "2020",
				where: "Barcelona",
				text: "First edition of the FSMET. International starting point of the process.",
			},
			{
				when: "2024",
				where: "Colombia",
				text: "Second edition. Consolidation of networks and territorial learnings.",
			},
			{
				when: "Assembly",
				where: "Collective decision",
				text: "The FSMET Assembly resolved to hold a third edition in Argentina.",
			},
			{
				when: "2025",
				where: "Salta and Palpalá / Jujuy",
				text: "Territorial assemblies that defined Jujuy and Salta as host provinces.",
			},
			{
				when: "Since Sep. 2025",
				where: "National process",
				text: "Periodic in-person meetings. The work starts from concrete experiences: microcredit, bio-inputs, agroecology, rural tourism, recycling and care work.",
			},
			{
				when: "Nov. 24–26, 2026",
				where: "Mexico · Pre-FSMET",
				text: "Pre-FSMET 2026 in Mexico: territorial word circles (Nov. 24–25, hybrid format) and a proposals day at the Congreso de la Unión, Mexico City (Nov. 26), under the motto “Building solidarity-based alternatives”.",
			},
			{
				when: "April 7–9, 2027",
				where: "Jujuy and Salta",
				text: "Main gathering of FSMET 2027: three days. Venues and the schedule for each date to be confirmed.",
			},
		],
	},
	territorios: {
		label: "Territories",
		h2: "Jujuy and Salta, host provinces",
		intro: "The Argentine edition is anchored in the north. The territory is not just the place of the gathering: it is where the experiences the process wants to connect actually live.",
		badge: "Host province",
		cards: [
			{
				nombre: "Jujuy",
				texto: "The territorial assembly of Palpalá (2025) brought together organizations, communities and institutions, and defined Jujuy as a host province.",
			},
			{
				nombre: "Salta",
				texto: "The territorial assembly of Salta (2025) consolidated the provincial process and defined it as co-host of the third edition of the FSMET.",
			},
		],
		footnote: "Preparatory process underway · venues and logistics to be confirmed.",
	},
	reuniones: {
		label: "Webinar meetings",
		h2: "The process is also built online",
		intro: "A cycle of open virtual meetings accompanying the road to the forum, from October 2026 to the main gathering in April 2027. They are streamed live on YouTube.",
		webinar: "Webinar",
		live: "Watch the live stream",
		soon: "Stream coming soon",
		pending: "To be confirmed",
		empty: "Coming soon",
		emptyText:
			"We are preparing the webinar series that will accompany the road to the forum. Dates, topics and stream links will be announced here.",
		items: [],
	},
	agenda: {
		label: "Global agenda",
		h2: "Other gatherings in the ecosystem",
		intro: "The FSMET is part of a global ecosystem of transformative economy forums and processes. These are other gatherings also underway.",
		items: [
			{
				icon: "mdi:earth",
				logo: "/img/maricagsef2027-en.webp",
				meta: "Oct 9–12, 2027 · Maricá, Brazil",
				title: "MaricáGSEF2027 — Global Social and Solidarity Economy Forum",
				text: "8th edition of the GSEF's biennial forum, co-organized with the Maricá City Hall. It brings together local and national governments, networks, institutions and SSE actors from around the world.",
				cta: "Learn about the forum",
				url: "https://www.gsef-net.org/es/maricagsef2027",
			},
		],
	},
	infoutil: {
		label: "Useful information",
		h2: "Getting to and staying in the territory",
		intro: "Practical details for planning the trip to Jujuy and Salta. This section is completed as venues, logistics and accommodation are confirmed.",
		pending: "To be confirmed",
		bloques: [
			{
				icon: "mdi:airplane",
				title: "Getting there",
				items: [
					{ text: "Gdor. Horacio Guzmán Airport (JUJ), in El Cadillal, ~33 km from San Salvador de Jujuy." },
					{ text: "Martín Miguel de Güemes Airport (SLA), ~10 km from the city of Salta." },
					{ text: "Both capitals have long-distance bus terminals with connections from across the country." },
				],
			},
			{
				icon: "mdi:routes",
				title: "Routes and transfers",
				items: [
					{ text: "San Salvador de Jujuy ↔ Salta city: ~90 km via RN9 (corniche) or RN34." },
					{ text: "Official transfers between venues and suggested times.", pendiente: true },
				],
			},
			{
				icon: "mdi:terrain",
				title: "Altitude and climate",
				items: [
					{ text: "San Salvador de Jujuy and Salta city sit at ~1,200 masl; April is mild and dry." },
					{ text: "If you travel through the Quebrada de Humahuaca or the Puna (2,000–3,700 masl), plan a day to acclimatize." },
				],
			},
		],
		hospedaje: {
			title: "Accommodation",
			text: "The map shows hotels in downtown San Salvador de Jujuy as an initial reference. Agreements, special rates and distance to the final venue will be published once confirmed.",
			pendingItems: [
				"Solidarity options and community accommodation",
				"Accommodation in Salta city",
			],
			legendHotel: "Suggested accommodation",
			legendCity: "Host city",
			listTitle: "Accommodation in the city center",
		},
		hoteles: [
			{ detalle: "Güemes 864 · 4★ · event halls" },
			{ detalle: "Av. 19 de Abril 687 · superior 4★ · facing Xibi-Xibi park" },
			{ detalle: "Ramírez de Velazco 244 · spa · convention hall" },
			{ detalle: "Belgrano 1263 · 3★ · city center" },
			{ detalle: "Boutique · steps from Plaza Belgrano and the Cathedral" },
			{ detalle: "Alvear 627 · breakfast included · 300 m from the Cabildo" },
			{ detalle: "Alvear 1230 · budget option · breakfast and Wi-Fi" },
		],
	},
	preguntas: {
		label: "Frequently asked questions",
		h2: "What people usually ask",
		items: [
			{
				q: "What is the FSMET?",
				a: "A thematic space of the World Social Forum dedicated to transformative economies. It connects experiences of social, solidarity, popular, cooperative, agroecological, care and ethical-finance economies that currently work in isolation.",
			},
			{
				q: "Is it an event or a process?",
				a: "A process. The main gathering is one moment within a path that begins earlier —assemblies, exchange and systematization of experiences— and continues afterwards with networks, proposals and collective action.",
			},
			{
				q: "Who can participate?",
				a: "Social organizations, cooperatives, communities, producers, universities and researchers, students, local governments, institutions and national and international networks.",
			},
			{
				q: "What is a transformative economy?",
				a: "A broad term covering social and solidarity economy, popular economy, cooperativism, community production, agroecology, food sovereignty, care systems, ethical finance, short supply chains and other practices that put life and territory at the center.",
			},
			{
				q: "When and where is the gathering?",
				a: "The main gathering takes place on April 7, 8 and 9, 2027 in Jujuy and Salta. Venues and the schedule for each day will be announced once confirmed.",
			},
			{
				q: "Why Jujuy and Salta?",
				a: "The FSMET Assembly decided to hold the third edition in Argentina, and the 2025 territorial assemblies in Salta and Palpalá defined Jujuy and Salta as host provinces.",
			},
			{
				q: "What happens after the gathering?",
				a: "The idea is for the forum not to end when the gathering ends: working groups, networks, common campaigns, public policy proposals and follow-up mechanisms are being sought.",
			},
		],
		footerText: "Have another question or want to add your experience?",
		footerLink: "Write to us through the form",
	},
	inscripcion: {
		label: "Registration",
		h2: "Join the process",
		introPre: "You can join as a",
		introExpositor: "speaker",
		introMid: "—presenting an experience, research or proposal— or as a",
		introOyente: "listener",
		introPost: ", taking part in the meetings and the gathering. The official channel is still under construction: this form registers interest for the preparatory process.",
		bullets: [
			"Organizations, cooperatives and territorial communities",
			"Universities, research and education teams",
			"Local governments and public institutions",
		],
		legend: "How do you want to participate?",
		rolOyente: { title: "I'm attending as a listener", desc: "I want to take part in the meetings and the gathering" },
		rolExpositor: { title: "I'm a speaker", desc: "I'm presenting an experience, research or proposal" },
		fields: {
			nombre: "Full name",
			email: "Email",
			territorio: "Territory / country",
			organizacion: "Organization or community",
			opcional: "(optional)",
		},
		expo: {
			title: "Presentation details",
			titulo: "Presentation title",
			aporte: "Type of contribution",
			elegir: "Choose…",
			aportes: [
				"Research / knowledge",
				"Practical experience / management",
				"Education / popular education",
				"Activism / community organizing",
				"Political / regulatory advocacy",
				"Productive / technological innovation",
			],
			eje: "Thematic axis",
			ejes: [
				"Economy, Territory and Buen Vivir",
				"Production, Work and Social-Productive Networks",
				"Ethical Finance, Credit and Redistribution",
				"Agroecology, Environment and Ecological Transition",
				"Education, Culture and Change of Common Sense",
				"Public Policy and Advocacy",
			],
			resumen: "Presentation summary",
			consentimiento:
				"I agree that my experience may appear in the process directory of experiences",
		},
		submit: "Participate",
		sending: "Sending…",
		ok: "Thank you, we received your registration. The process team will get in touch.",
		errInvalid: "Check the form: required fields are missing for the role you chose.",
		errTurnstile: "Please complete the anti-bot verification.",
		errSend: "The registration could not be sent. Please try again in a few minutes.",
	},
	footer: {
		desc: "World Social Forum of Transformative Economies. Jujuy and Salta, Argentina.",
		rights: "All rights reserved",
		findUs: "Find us on:",
		soon: "coming soon",
		channels: "Official channels coming soon.",
		building: "A process under construction. Memory, network and territory.",
	},
};

const pt: Strings = {
	meta: {
		title: "FSMET — Fórum Social Mundial das Economias Transformadoras",
		description:
			"Processo coletivo e territorial para conectar experiências de economias transformadoras. Próxima edição na Argentina, com Jujuy e Salta como províncias anfitriãs.",
		ogLocale: "pt_BR",
		skip: "Pular para o conteúdo",
	},
	nav: {
		tagline: "Economias transformadoras",
		links: [
			{ href: "#quienes-somos", label: "Quem somos" },
			{ href: "#de-donde-venimos", label: "De onde viemos" },
			{ href: "#territorios", label: "Territórios" },
			{ href: "#reuniones", label: "Encontros" },
			{ href: "#info-util", label: "Info útil" },
			{ href: "#preguntas", label: "Perguntas" },
		],
		participar: "Participar",
		menuOpen: "Abrir menu",
		menuClose: "Fechar menu",
		langLabel: "Idioma",
	},
	hero: {
		badge: "Fórum Social Mundial · processo territorial",
		title: "Das alternativas dispersas às convergências territoriais",
		text: "O Fórum Social Mundial das Economias Transformadoras é um espaço temático do FSM. A próxima edição se constrói na Argentina, com Jujuy e Salta como províncias anfitriãs.",
		ctaPrimary: "Conhecer o processo",
		ctaSecondary: "Somar-se",
		subtitle: "FSMET 2027 · Jujuy e Salta",
		logoAlt: "Identidade visual do FSMET: território, encontro e rede",
		countdown: {
			label: "O encontro principal começa em",
			units: ["dias", "horas", "min", "seg"],
			date: "7, 8 e 9 de abril de 2027 · Jujuy e Salta",
		},
	},
	quienes: {
		label: "Quem somos",
		h2: "Um processo coletivo, não apenas um evento",
		p1: "O FSMET busca conectar experiências de economia social, solidária, popular, comunitária, camponesa, indígena, cooperativa, agroecológica, de cuidados e de finanças éticas. O problema não é a falta de alternativas: é que muitas seguem isoladas.",
		p2: "A ideia é construir uma minga global: um encontro onde confluem organizações de base, territórios, movimentos, comunidades e instituições. O processo começa antes do encontro principal e continua depois.",
		quote: "“Do projeto ao ecossistema.”",
		quoteCaption:
			"Organização responsável pela preparação: Movimiento Hacia Otra Economía, Social Solidaria Popular Campesino Indígena, Afrodescendiente. Uma equipe de governança para o processo está se formando.",
		ejesTitle: "Seis eixos temáticos",
		ejes: [
			{
				n: "01",
				title: "Economia, Território e Bem Viver",
				text: "Desenvolvimento territorial, comunidade, inclusão e sustentabilidade da vida.",
				temas: ["Economia transformadora", "Território", "Bem Viver", "Comunidade", "Inclusão"],
			},
			{
				n: "02",
				title: "Produção, Trabalho e Tramas",
				text: "Cooperativas, circuitos curtos e articulação entre produtoras e produtores.",
				temas: ["Cooperativas", "Redes produtivas", "Circuitos curtos", "Trabalho", "Articulação"],
			},
			{
				n: "03",
				title: "Finanças Éticas e Redistribuição",
				text: "Crédito, fundos rotativos, bancos comunitários e educação financeira.",
				temas: ["Crédito", "Fundos rotativos", "Bancos comunitários", "Educação financeira"],
			},
			{
				n: "04",
				title: "Agroecologia e Transição Ecológica",
				text: "Bens comuns, bioinsumos, meio ambiente e produção sustentável.",
				temas: ["Agroecologia", "Bioinsumos", "Bens comuns", "Soberania alimentar"],
			},
			{
				n: "05",
				title: "Formação, Cultura e Senso Comum",
				text: "Conhecimentos territoriais, pesquisa, comunicação e educação.",
				temas: ["Educação", "Conhecimentos territoriais", "Pesquisa", "Comunicação"],
			},
			{
				n: "06",
				title: "Políticas Públicas e Incidência",
				text: "Propostas, articulação com instituições e marcos legislativos.",
				temas: ["Legislação", "Incidência institucional", "Propostas", "Governos"],
			},
		],
	},
	marcha: {
		label: "O processo em marcha",
		h2: "Espaços que já caminham",
		intro: "O FSMET não começa em abril de 2027: diálogos mensais, um doutorado internacional e um comitê de coordenação já estão movendo o processo.",
		items: [
			{
				icon: "mdi:forum-outline",
				meta: "Mensal · virtual",
				title: "Diálogos Globais",
				text: "Encontros mensais entre o FSM, o FSMET e outros fóruns globais para debater ideias, elaborar propostas e compartilhar ações. Iniciativa da Cátedra Global da Universidade Cooperativa del Buen Vivir.",
				cta: "Ver diálogos",
				url: "https://www.otraeconomia.com/di%C3%A1logos-globales-fsmet/?preview_sid=635060",
			},
			{
				icon: "mdi:school-outline",
				meta: "Formação · 14 meses · inscrições abertas",
				title: "Doutorado Economias Transformadoras",
				text: "Doutorado internacional acordado na assembleia de Palpalá: formação e pesquisa-ação a partir das práticas territoriais, com módulos assíncronos. Sem títulos acadêmicos prévios exigidos.",
				cta: "Conhecer o doutorado",
				url: "https://www.otraeconomia.com/?preview_sid=271675",
			},
			{
				icon: "mdi:account-group-outline",
				meta: "~200 organizações · 30+ países",
				title: "Comitê de Coordenação Internacional",
				text: "O espaço que coordena o processo rumo ao FSMET 2027: organizações, movimentos sociais, universidades e redes de economias transformadoras de todo o mundo.",
				cta: "Ver o comitê",
				url: "https://www.otraeconomia.com/comit%C3%A9-coordinaci%C3%B3n-internacional-fsmet-2027-y-pre-m%C3%A9xico/",
			},
		],
	},
	venimos: {
		label: "De onde viemos",
		h2: "Uma história de encontros que se torna território",
		intro: "O FSMET é um espaço temático do Fórum Social Mundial. Cada edição soma memórias, organizações e tramas. A edição argentina se ancora no norte, com Jujuy e Salta como anfitriãs.",
		hitos: [
			{
				when: "2020",
				where: "Barcelona",
				text: "Primeira edição do FSMET. Ponto de partida internacional do processo.",
			},
			{
				when: "2024",
				where: "Colômbia",
				text: "Segunda edição. Consolidação de redes e aprendizados territoriais.",
			},
			{
				when: "Assembleia",
				where: "Decisão coletiva",
				text: "A Assembleia do FSMET resolveu realizar uma terceira edição na Argentina.",
			},
			{
				when: "2025",
				where: "Salta e Palpalá / Jujuy",
				text: "Assembleias territoriais que definiram Jujuy e Salta como províncias anfitriãs.",
			},
			{
				when: "Desde set. 2025",
				where: "Processo nacional",
				text: "Reuniões presenciais periódicas. Trabalha-se a partir de experiências concretas: microcréditos, bioinsumos, agroecologia, turismo rural, reciclagem e cuidados.",
			},
			{
				when: "24–26 nov. 2026",
				where: "México · Pré-FSMET",
				text: "Pré-FSMET 2026 no México: círculos da palavra territoriais (24 e 25 nov., formato híbrido) e jornada de propostas no Congresso da União, Cidade do México (26 nov.), sob o lema «Construindo alternativas solidárias».",
			},
			{
				when: "7–9 de abril de 2027",
				where: "Jujuy e Salta",
				text: "Encontro principal do FSMET 2027: três jornadas. Sedes e cronograma de cada data a confirmar.",
			},
		],
	},
	territorios: {
		label: "Territórios",
		h2: "Jujuy e Salta, províncias anfitriãs",
		intro: "A edição argentina se ancora no norte. O território não é apenas o lugar do encontro: é onde vivem as experiências que o processo quer conectar.",
		badge: "Província anfitriã",
		cards: [
			{
				nombre: "Jujuy",
				texto: "A assembleia territorial de Palpalá (2025) reuniu organizações, comunidades e instituições e definiu Jujuy como província anfitriã.",
			},
			{
				nombre: "Salta",
				texto: "A assembleia territorial de Salta (2025) consolidou o processo provincial e a definiu como coanfitriã da terceira edição do FSMET.",
			},
		],
		footnote: "Processo preparatório em curso · sedes e logística a confirmar.",
	},
	reuniones: {
		label: "Encontros webinars",
		h2: "O processo também se constrói on-line",
		intro: "Ciclo de encontros virtuais abertos que acompanham o caminho até o fórum, de outubro de 2026 até o encontro principal de abril de 2027. São transmitidos ao vivo pelo YouTube.",
		webinar: "Webinar",
		live: "Assistir à transmissão ao vivo",
		soon: "Transmissão em breve",
		pending: "A confirmar",
		empty: "Em breve",
		emptyText:
			"Estamos preparando o ciclo de webinars que acompanhará o caminho até o fórum. As datas, temáticas e links de transmissão serão anunciados aqui.",
		items: [],
	},
	agenda: {
		label: "Agenda global",
		h2: "Outros encontros do ecossistema",
		intro: "O FSMET faz parte de um ecossistema global de fóruns e processos de economias transformadoras. Estes são outros encontros que também estão em marcha.",
		items: [
			{
				icon: "mdi:earth",
				logo: "/img/maricagsef2027-es.webp",
				meta: "9–12 out. 2027 · Maricá, Brasil",
				title: "MaricáGSEF2027 — Fórum Global de Economia Social e Solidária",
				text: "8ª edição do fórum bienal do GSEF, co-organizado com a Prefeitura de Maricá. Reúne governos locais e nacionais, redes, instituições e atores da ESS do mundo todo.",
				cta: "Conhecer o fórum",
				url: "https://www.gsef-net.org/es/maricagsef2027",
			},
		],
	},
	infoutil: {
		label: "Informações úteis",
		h2: "Chegar e ficar no território",
		intro: "Dados práticos para planejar a viagem a Jujuy e Salta. Esta seção é completada à medida que se confirmem sedes, logística e hospedagens.",
		pending: "A confirmar",
		bloques: [
			{
				icon: "mdi:airplane",
				title: "Como chegar",
				items: [
					{ text: "Aeroporto Gdor. Horacio Guzmán (JUJ), em El Cadillal, a ~33 km de San Salvador de Jujuy." },
					{ text: "Aeroporto Martín Miguel de Güemes (SLA), a ~10 km da cidade de Salta." },
					{ text: "Ambas as capitais contam com terminais rodoviários com conexões de todo o país." },
				],
			},
			{
				icon: "mdi:routes",
				title: "Rotas e traslados",
				items: [
					{ text: "San Salvador de Jujuy ↔ Salta capital: ~90 km pela RN9 (cornisa) ou RN34." },
					{ text: "Traslados oficiais entre sedes e horários sugeridos.", pendiente: true },
				],
			},
			{
				icon: "mdi:terrain",
				title: "Altitude e clima",
				items: [
					{ text: "San Salvador de Jujuy e Salta capital estão a ~1.200 msnm; abril é ameno e seco." },
					{ text: "Se você percorrer a Quebrada de Humahuaca ou a Puna (2.000 a 3.700 msnm), preveja um dia de aclimatação." },
				],
			},
		],
		hospedaje: {
			title: "Hospedagem",
			text: "O mapa mostra hotéis do miocentro de San Salvador de Jujuy como referência inicial. Convênios, tarifas especiais e distância até a sede final serão publicados quando confirmados.",
			pendingItems: [
				"Opções solidárias e hospedagem comunitária",
				"Hospedagem em Salta capital",
			],
			legendHotel: "Hospedagem sugerida",
			legendCity: "Cidade anfitriã",
			listTitle: "Hospedagens no microcentro",
		},
		hoteles: [
			{ detalle: "Güemes 864 · 4★ · salões de eventos" },
			{ detalle: "Av. 19 de Abril 687 · 4★ superior · em frente ao parque Xibi-Xibi" },
			{ detalle: "Ramírez de Velazco 244 · spa · salão de convenções" },
			{ detalle: "Belgrano 1263 · 3★ · microcentro" },
			{ detalle: "Boutique · a poucos metros da Plaza Belgrano e da Catedral" },
			{ detalle: "Alvear 627 · café da manhã incluído · a 300 m do Cabildo" },
			{ detalle: "Alvear 1230 · opção econômica · café da manhã e Wi-Fi" },
		],
	},
	preguntas: {
		label: "Perguntas frequentes",
		h2: "O que costuma se perguntar",
		items: [
			{
				q: "O que é o FSMET?",
				a: "Um espaço temático do Fórum Social Mundial dedicado às economias transformadoras. Conecta experiências de economia social, solidária, popular, cooperativa, agroecológica, de cuidados e de finanças éticas que hoje funcionam de maneira isolada.",
			},
			{
				q: "É um evento ou um processo?",
				a: "Um processo. O encontro principal é um momento dentro de um caminho que começa antes —assembleias, intercâmbio e sistematização de experiências— e continua depois com redes, propostas e ação coletiva.",
			},
			{
				q: "Quem pode participar?",
				a: "Organizações sociais, cooperativas, comunidades, produtoras e produtores, universidades e pesquisadores, estudantes, governos locais, instituições e redes nacionais e internacionais.",
			},
			{
				q: "O que é uma economia transformadora?",
				a: "Um termo amplo que inclui economia social e solidária, economia popular, cooperativismo, produção comunitária, agroecologia, soberania alimentar, sistemas de cuidados, finanças éticas, circuitos curtos e outras práticas que colocam a vida e o território no centro.",
			},
			{
				q: "Quando e onde é o encontro?",
				a: "O encontro principal acontece nos dias 7, 8 e 9 de abril de 2027 em Jujuy e Salta. As sedes e o cronograma de cada jornada serão anunciados quando confirmados.",
			},
			{
				q: "Por que Jujuy e Salta?",
				a: "A Assembleia do FSMET decidiu realizar a terceira edição na Argentina, e as assembleias territoriais de 2025 em Salta e Palpalá definiram Jujuy e Salta como províncias anfitriãs.",
			},
			{
				q: "O que acontece depois do encontro?",
				a: "A ideia é que o fórum não termine quando termina o encontro: buscam-se grupos de trabalho, redes, campanhas comuns, propostas de políticas públicas e mecanismos de acompanhamento.",
			},
		],
		footerText: "Tem outra dúvida ou quer somar sua experiência?",
		footerLink: "Escreva pelo formulário",
	},
	inscripcion: {
		label: "Inscrição",
		h2: "Somar-se ao processo",
		introPre: "Você pode se somar como",
		introExpositor: "expositor/a",
		introMid: "—apresentando uma experiência, pesquisa ou proposta— ou como",
		introOyente: "ouvinte",
		introPost: ", participando dos encontros e do encontro principal. O canal oficial segue em construção: este formulário registra interesse para o processo preparatório.",
		bullets: [
			"Organizações, cooperativas e comunidades territoriais",
			"Universidades, equipes de pesquisa e formação",
			"Governos locais e instituições públicas",
		],
		legend: "Como você quer participar?",
		rolOyente: { title: "Participo como ouvinte", desc: "Quero participar dos encontros e do encontro principal" },
		rolExpositor: { title: "Sou expositor/a", desc: "Apresento uma experiência, pesquisa ou proposta" },
		fields: {
			nombre: "Nome e sobrenome",
			email: "E-mail",
			territorio: "Território / país",
			organizacion: "Organização ou comunidade",
			opcional: "(opcional)",
		},
		expo: {
			title: "Dados da exposição",
			titulo: "Título da exposição",
			aporte: "Tipo de contribuição",
			elegir: "Escolher…",
			aportes: [
				"Pesquisa / conhecimento",
				"Experiência prática / gestão",
				"Formação / educação popular",
				"Ativismo / organização comunitária",
				"Incidência política / normativa",
				"Inovação produtiva / tecnológica",
			],
			eje: "Eixo temático",
			ejes: [
				"Economia, Território e Bem Viver",
				"Produção, Trabalho e Tramas Socioprodutivas",
				"Finanças Éticas, Crédito e Redistribuição",
				"Agroecologia, Ambiente e Transição Ecológica",
				"Formação, Cultura e Mudança de Senso Comum",
				"Políticas Públicas e Incidência",
			],
			resumen: "Resumo da exposição",
			consentimiento:
				"Aceito que minha experiência apareça no diretório de experiências do processo",
		},
		submit: "Participar",
		sending: "Enviando…",
		ok: "Obrigado/a, recebemos sua inscrição. A equipe do processo vai entrar em contato.",
		errInvalid: "Revise o formulário: faltam campos obrigatórios para o papel que você escolheu.",
		errTurnstile: "Complete a verificação anti-bot.",
		errSend: "Não foi possível enviar a inscrição. Tente novamente em alguns minutos.",
	},
	footer: {
		desc: "Fórum Social Mundial das Economias Transformadoras. Jujuy e Salta, Argentina.",
		rights: "Todos os direitos reservados",
		findUs: "Encontre-nos em:",
		soon: "em breve",
		channels: "Canais oficiais em breve.",
		building: "Processo em construção. Memória, rede e território.",
	},
};

const fr: Strings = {
	meta: {
		title: "FSMET — Forum Social Mondial des Économies Transformatrices",
		description:
			"Un processus collectif et territorial pour relier les expériences d'économies transformatrices. Prochaine édition en Argentine, avec Jujuy et Salta comme provinces hôtes.",
		ogLocale: "fr_FR",
		skip: "Aller au contenu",
	},
	nav: {
		tagline: "Économies transformatrices",
		links: [
			{ href: "#quienes-somos", label: "Qui sommes-nous" },
			{ href: "#de-donde-venimos", label: "D'où nous venons" },
			{ href: "#territorios", label: "Territoires" },
			{ href: "#reuniones", label: "Réunions" },
			{ href: "#info-util", label: "Infos utiles" },
			{ href: "#preguntas", label: "FAQ" },
		],
		participar: "Participer",
		menuOpen: "Ouvrir le menu",
		menuClose: "Fermer le menu",
		langLabel: "Langue",
	},
	hero: {
		badge: "Forum Social Mondial · processus territorial",
		title: "Des alternatives dispersées aux convergences territoriales",
		text: "Le Forum Social Mondial des Économies Transformatrices est un espace thématique du FSM. La prochaine édition se construit en Argentine, avec Jujuy et Salta comme provinces hôtes.",
		ctaPrimary: "Découvrir le processus",
		ctaSecondary: "Nous rejoindre",
		subtitle: "FSMET 2027 · Jujuy et Salta",
		logoAlt: "Identité visuelle du FSMET : territoire, rencontre et réseau",
		countdown: {
			label: "La rencontre principale commence dans",
			units: ["jours", "heures", "min", "s"],
			date: "7, 8 et 9 avril 2027 · Jujuy et Salta",
		},
	},
	quienes: {
		label: "Qui sommes-nous",
		h2: "Un processus collectif, pas seulement un événement",
		p1: "Le FSMET cherche à relier les expériences d'économie sociale, solidaire, populaire, communautaire, paysanne, autochtone, coopérative, agroécologique, de soins et de finance éthique. Le problème n'est pas le manque d'alternatives : c'est que beaucoup restent isolées.",
		p2: "L'idée est de construire une minga mondiale : une rencontre où convergent organisations de base, territoires, mouvements, communautés et institutions. Le processus commence avant la rencontre principale et se poursuit après.",
		quote: "« Du projet à l'écosystème. »",
		quoteCaption:
			"Organisation responsable de la préparation : Movimiento Hacia Otra Economía, Social Solidaria Popular Campesino Indígena, Afrodescendiente. Une équipe de gouvernance du processus est en cours de formation.",
		ejesTitle: "Six axes thématiques",
		ejes: [
			{
				n: "01",
				title: "Économie, Territoire et Buen Vivir",
				text: "Développement territorial, communauté, inclusion et durabilité de la vie.",
				temas: ["Économie transformatrice", "Territoire", "Buen Vivir", "Communauté", "Inclusion"],
			},
			{
				n: "02",
				title: "Production, Travail et Trames",
				text: "Coopératives, circuits courts et articulation entre productrices et producteurs.",
				temas: ["Coopératives", "Réseaux productifs", "Circuits courts", "Travail", "Articulation"],
			},
			{
				n: "03",
				title: "Finances Éthiques et Redistribution",
				text: "Crédit, fonds rotatifs, banques communautaires et éducation financière.",
				temas: ["Crédit", "Fonds rotatifs", "Banques communautaires", "Éducation financière"],
			},
			{
				n: "04",
				title: "Agroécologie et Transition Écologique",
				text: "Biens communs, intrants biologiques, environnement et production durable.",
				temas: ["Agroécologie", "Intrants biologiques", "Biens communs", "Souveraineté alimentaire"],
			},
			{
				n: "05",
				title: "Formation, Culture et Sens Commun",
				text: "Savoirs territoriaux, recherche, communication et éducation.",
				temas: ["Éducation", "Savoirs territoriaux", "Recherche", "Communication"],
			},
			{
				n: "06",
				title: "Politiques Publiques et Plaidoyer",
				text: "Propositions, articulation avec les institutions et cadres législatifs.",
				temas: ["Législation", "Plaidoyer institutionnel", "Propositions", "Gouvernements"],
			},
		],
	},
	marcha: {
		label: "Le processus en marche",
		h2: "Des espaces déjà en mouvement",
		intro: "Le FSMET ne commence pas en avril 2027 : dialogues mensuels, doctorat international et comité de coordination font déjà avancer le processus.",
		items: [
			{
				icon: "mdi:forum-outline",
				meta: "Mensuel · en ligne",
				title: "Dialogues Globaux",
				text: "Rencontres mensuelles entre le FSM, le FSMET et d'autres forums mondiaux pour débattre d'idées, élaborer des propositions et partager des actions. Une initiative de la Chaire Globale de l'Universidad Cooperativa del Buen Vivir.",
				cta: "Voir les dialogues",
				url: "https://www.otraeconomia.com/di%C3%A1logos-globales-fsmet/?preview_sid=635060",
			},
			{
				icon: "mdi:school-outline",
				meta: "Formation · 14 mois · inscriptions ouvertes",
				title: "Doctorat Économies Transformatrices",
				text: "Doctorat international décidé à l'assemblée de Palpalá : formation et recherche-action à partir des pratiques territoriales, avec des modules asynchrones. Aucun diplôme préalable requis.",
				cta: "Découvrir le doctorat",
				url: "https://www.otraeconomia.com/?preview_sid=271675",
			},
			{
				icon: "mdi:account-group-outline",
				meta: "~200 organisations · 30+ pays",
				title: "Comité de Coordination Internationale",
				text: "L'espace qui coordonne le processus vers le FSMET 2027 : organisations, mouvements sociaux, universités et réseaux d'économies transformatrices du monde entier.",
				cta: "Voir le comité",
				url: "https://www.otraeconomia.com/comit%C3%A9-coordinaci%C3%B3n-international-fsmet-2027-y-pre-m%C3%A9xico/",
			},
		],
	},
	venimos: {
		label: "D'où nous venons",
		h2: "Une histoire de rencontres qui devient territoire",
		intro: "Le FSMET est un espace thématique du Forum Social Mondial. Chaque édition ajoute mémoires, organisations et réseaux. L'édition argentine s'ancre dans le nord, avec Jujuy et Salta comme hôtes.",
		hitos: [
			{
				when: "2020",
				where: "Barcelone",
				text: "Première édition du FSMET. Point de départ international du processus.",
			},
			{
				when: "2024",
				where: "Colombie",
				text: "Deuxième édition. Consolidation des réseaux et des apprentissages territoriaux.",
			},
			{
				when: "Assemblée",
				where: "Décision collective",
				text: "L'Assemblée du FSMET a décidé d'organiser une troisième édition en Argentine.",
			},
			{
				when: "2025",
				where: "Salta et Palpalá / Jujuy",
				text: "Assemblées territoriales qui ont désigné Jujuy et Salta comme provinces hôtes.",
			},
			{
				when: "Depuis sept. 2025",
				where: "Processus national",
				text: "Réunions présentielles périodiques. Le travail part d'expériences concrètes : microcrédits, intrants biologiques, agroécologie, tourisme rural, recyclage et soins.",
			},
			{
				when: "24–26 nov. 2026",
				where: "Mexique · Pré-FSMET",
				text: "Pré-FSMET 2026 au Mexique : cercles de parole territoriaux (24 et 25 nov., format hybride) et journée de propositions au Congrès de l'Union, Mexico (26 nov.), sous la devise « Construire des alternatives solidaires ».",
			},
			{
				when: "7–9 avril 2027",
				where: "Jujuy et Salta",
				text: "Rencontre principale du FSMET 2027 : trois journées. Lieux et programme de chaque date à confirmer.",
			},
		],
	},
	territorios: {
		label: "Territoires",
		h2: "Jujuy et Salta, provinces hôtes",
		intro: "L'édition argentine s'ancre dans le nord. Le territoire n'est pas seulement le lieu de la rencontre : c'est là où vivent les expériences que le processus veut relier.",
		badge: "Province hôte",
		cards: [
			{
				nombre: "Jujuy",
				texto: "L'assemblée territoriale de Palpalá (2025) a réuni organisations, communautés et institutions et a désigné Jujuy comme province hôte.",
			},
			{
				nombre: "Salta",
				texto: "L'assemblée territoriale de Salta (2025) a consolidé le processus provincial et l'a désignée co-hôte de la troisième édition du FSMET.",
			},
		],
		footnote: "Processus préparatoire en cours · lieux et logistique à confirmer.",
	},
	reuniones: {
		label: "Réunions et webinaires",
		h2: "Le processus se construit aussi en ligne",
		intro: "Cycle de rencontres virtuelles ouvertes qui accompagnent le chemin vers le forum, d'octobre 2026 jusqu'à la rencontre principale d'avril 2027. Diffusées en direct sur YouTube.",
		webinar: "Webinaire",
		live: "Voir la diffusion en direct",
		soon: "Diffusion bientôt disponible",
		pending: "À confirmer",
		empty: "Bientôt disponible",
		emptyText:
			"Nous préparons le cycle de webinaires qui accompagnera le chemin vers le forum. Les dates, thématiques et liens de diffusion seront annoncés ici.",
		items: [],
	},
	agenda: {
		label: "Agenda mondial",
		h2: "D'autres rencontres de l'écosystème",
		intro: "Le FSMET s'inscrit dans un écosystème mondial de forums et processus d'économies transformatrices. Voici d'autres rencontres également en marche.",
		items: [
			{
				icon: "mdi:earth",
				logo: "/img/maricagsef2027-fr.webp",
				meta: "9–12 oct. 2027 · Maricá, Brésil",
				title: "MaricáGSEF2027 — Forum Global de l'Économie Sociale et Solidaire",
				text: "8e édition du forum biennal du GSEF, co-organisé avec la mairie de Maricá. Il réunit collectivités locales et nationales, réseaux, institutions et acteurs de l'ESS du monde entier.",
				cta: "Découvrir le forum",
				url: "https://www.gsef-net.org/es/maricagsef2027",
			},
		],
	},
	infoutil: {
		label: "Informations utiles",
		h2: "Arriver et séjourner sur le territoire",
		intro: "Informations pratiques pour préparer le voyage à Jujuy et Salta. Cette section se complète au fur et à mesure que les lieux, la logistique et les hébergements sont confirmés.",
		pending: "À confirmer",
		bloques: [
			{
				icon: "mdi:airplane",
				title: "Comment arriver",
				items: [
					{ text: "Aéroport Gdor. Horacio Guzmán (JUJ), à El Cadillal, à ~33 km de San Salvador de Jujuy." },
					{ text: "Aéroport Martín Miguel de Güemes (SLA), à ~10 km de la ville de Salta." },
					{ text: "Les deux capitales disposent de terminaux de bus avec des liaisons depuis tout le pays." },
				],
			},
			{
				icon: "mdi:routes",
				title: "Routes et transferts",
				items: [
					{ text: "San Salvador de Jujuy ↔ Salta capitale : ~90 km par la RN9 (corniche) ou la RN34." },
					{ text: "Transferts officiels entre les lieux et horaires suggérés.", pendiente: true },
				],
			},
			{
				icon: "mdi:terrain",
				title: "Altitude et climat",
				items: [
					{ text: "San Salvador de Jujuy et Salta capitale sont à ~1 200 m d'altitude ; avril est tempéré et sec." },
					{ text: "Si vous parcourez la Quebrada de Humahuaca ou la Puna (2 000 à 3 700 m), prévoyez un jour d'acclimatation." },
				],
			},
		],
		hospedaje: {
			title: "Hébergement",
			text: "La carte montre des hôtels du microcentre de San Salvador de Jujuy comme référence initiale. Conventions, tarifs spéciaux et distance au lieu final seront publiés une fois confirmés.",
			pendingItems: [
				"Options solidaires et hébergement communautaire",
				"Hébergement à Salta capitale",
			],
			legendHotel: "Hébergement suggéré",
			legendCity: "Ville hôte",
			listTitle: "Hébergements dans le microcentre",
		},
		hoteles: [
			{ detalle: "Güemes 864 · 4★ · salles d'événements" },
			{ detalle: "Av. 19 de Abril 687 · 4★ supérieur · face au parc Xibi-Xibi" },
			{ detalle: "Ramírez de Velazco 244 · spa · salle de conventions" },
			{ detalle: "Belgrano 1263 · 3★ · microcentre" },
			{ detalle: "Boutique · à quelques pas de la Plaza Belgrano et de la Cathédrale" },
			{ detalle: "Alvear 627 · petit-déjeuner inclus · à 300 m du Cabildo" },
			{ detalle: "Alvear 1230 · option économique · petit-déjeuner et Wi-Fi" },
		],
	},
	preguntas: {
		label: "Questions fréquentes",
		h2: "Ce qui se demande souvent",
		items: [
			{
				q: "Qu'est-ce que le FSMET ?",
				a: "Un espace thématique du Forum Social Mondial dédié aux économies transformatrices. Il relie des expériences d'économie sociale, solidaire, populaire, coopérative, agroécologique, de soins et de finance éthique qui fonctionnent aujourd'hui de manière isolée.",
			},
			{
				q: "Est-ce un événement ou un processus ?",
				a: "Un processus. La rencontre principale est un moment dans un chemin qui commence avant — assemblées, échanges et systématisation d'expériences — et se poursuit après avec des réseaux, des propositions et une action collective.",
			},
			{
				q: "Qui peut participer ?",
				a: "Organisations sociales, coopératives, communautés, productrices et producteurs, universités et chercheurs, étudiants, gouvernements locaux, institutions et réseaux nationaux et internationaux.",
			},
			{
				q: "Qu'est-ce qu'une économie transformatrice ?",
				a: "Un terme large qui inclut l'économie sociale et solidaire, l'économie populaire, le coopérativisme, la production communautaire, l'agroécologie, la souveraineté alimentaire, les systèmes de soins, la finance éthique, les circuits courts et d'autres pratiques qui placent la vie et le territoire au centre.",
			},
			{
				q: "Quand et où se déroule la rencontre ?",
				a: "La rencontre principale se déroule les 7, 8 et 9 avril 2027 à Jujuy et Salta. Les lieux et le programme de chaque journée seront annoncés une fois confirmés.",
			},
			{
				q: "Pourquoi Jujuy et Salta ?",
				a: "L'Assemblée du FSMET a décidé d'organiser la troisième édition en Argentine, et les assemblées territoriales de 2025 à Salta et Palpalá ont désigné Jujuy et Salta comme provinces hôtes.",
			},
			{
				q: "Que se passe-t-il après la rencontre ?",
				a: "L'idée est que le forum ne se termine pas quand la rencontre finit : on cherche des groupes de travail, des réseaux, des campagnes communes, des propositions de politiques publiques et des mécanismes de suivi.",
			},
		],
		footerText: "Une autre question ou envie d'ajouter votre expérience ?",
		footerLink: "Écrivez-nous depuis le formulaire",
	},
	inscripcion: {
		label: "Inscription",
		h2: "Rejoindre le processus",
		introPre: "Vous pouvez participer comme",
		introExpositor: "exposant·e",
		introMid: "— en présentant une expérience, une recherche ou une proposition — ou comme",
		introOyente: "auditeur·rice",
		introPost: ", en participant aux réunions et à la rencontre. Le canal officiel est encore en construction : ce formulaire enregistre votre intérêt pour le processus préparatoire.",
		bullets: [
			"Organisations, coopératives et communautés territoriales",
			"Universités, équipes de recherche et de formation",
			"Gouvernements locaux et institutions publiques",
		],
		legend: "Comment souhaitez-vous participer ?",
		rolOyente: { title: "J'assiste comme auditeur·rice", desc: "Je veux participer aux réunions et à la rencontre" },
		rolExpositor: { title: "Je suis exposant·e", desc: "Je présente une expérience, une recherche ou une proposition" },
		fields: {
			nombre: "Nom et prénom",
			email: "Courriel",
			territorio: "Territoire / pays",
			organizacion: "Organisation ou communauté",
			opcional: "(facultatif)",
		},
		expo: {
			title: "Informations sur l'exposé",
			titulo: "Titre de l'exposé",
			aporte: "Type d'apport",
			elegir: "Choisir…",
			aportes: [
				"Recherche / connaissance",
				"Expérience pratique / gestion",
				"Formation / éducation populaire",
				"Activisme / organisation communautaire",
				"Plaidoyer politique / normatif",
				"Innovation productive / technologique",
			],
			eje: "Axe thématique",
			ejes: [
				"Économie, Territoire et Buen Vivir",
				"Production, Travail et Trames socioproductives",
				"Finances Éthiques, Crédit et Redistribution",
				"Agroécologie, Environnement et Transition Écologique",
				"Formation, Culture et Changement de sens commun",
				"Politiques Publiques et Plaidoyer",
			],
			resumen: "Résumé de l'exposé",
			consentimiento:
				"J'accepte que mon expérience apparaisse dans le répertoire des expériences du processus",
		},
		submit: "Participer",
		sending: "Envoi en cours…",
		ok: "Merci, nous avons bien reçu votre inscription. L'équipe du processus vous contactera.",
		errInvalid: "Vérifiez le formulaire : il manque des champs obligatoires pour le rôle choisi.",
		errTurnstile: "Veuillez compléter la vérification anti-robot.",
		errSend: "L'inscription n'a pas pu être envoyée. Réessayez dans quelques minutes.",
	},
	footer: {
		desc: "Forum Social Mondial des Économies Transformatrices. Jujuy et Salta, Argentine.",
		rights: "Tous droits réservés",
		findUs: "Retrouvez-nous sur :",
		soon: "bientôt",
		channels: "Canaux officiels bientôt disponibles.",
		building: "Processus en construction. Mémoire, réseau et territoire.",
	},
};

const ui: Record<Locale, Strings> = { es, en, pt, fr };

export function getStrings(locale: string | undefined): Strings {
	return ui[(locale as Locale) ?? DEFAULT_LOCALE] ?? es;
}
