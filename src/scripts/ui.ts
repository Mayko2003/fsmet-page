const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal on scroll: los elementos con [data-reveal] aparecen al entrar en viewport
const revealObserver = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			entry.target.classList.add("is-visible");
			revealObserver.unobserve(entry.target);
		}
	},
	{ threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
);

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

// Menú móvil: el botón hamburguesa abre/cierra el panel de navegación
const menuBtn = document.querySelector<HTMLButtonElement>("[data-menu-btn]");
const menuPanel = document.querySelector<HTMLElement>("[data-menu-panel]");
const iconMenu = menuBtn?.querySelector<SVGElement>("[data-icon-menu]");
const iconClose = menuBtn?.querySelector<SVGElement>("[data-icon-close]");

if (menuBtn && menuPanel && iconMenu && iconClose) {
	const setMenuOpen = (open: boolean) => {
		menuPanel.classList.toggle("hidden", !open);
		iconMenu.classList.toggle("hidden", open);
		iconClose.classList.toggle("hidden", !open);
		menuBtn.setAttribute("aria-expanded", String(open));
		menuBtn.setAttribute(
			"aria-label",
			open ? (menuBtn.dataset.labelClose ?? "Cerrar menú") : (menuBtn.dataset.labelOpen ?? "Abrir menú"),
		);
	};
	const menuOpen = () => menuBtn.getAttribute("aria-expanded") === "true";

	menuBtn.addEventListener("click", () => setMenuOpen(!menuOpen()));
	menuPanel.querySelectorAll("a[data-nav]").forEach((link) =>
		link.addEventListener("click", () => setMenuOpen(false)),
	);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && menuOpen()) {
			setMenuOpen(false);
			menuBtn.focus();
		}
	});
	window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
		if (e.matches) setMenuOpen(false);
	});
}

// Scrollspy: resalta en el nav el link de la sección que cruza el centro del viewport
const navAnchors = document.querySelectorAll<HTMLAnchorElement>("header a[data-nav]");
const anchorsBySection = new Map<string, HTMLAnchorElement[]>();

for (const anchor of navAnchors) {
	const id = anchor.hash.slice(1);
	if (!id) continue;
	const list = anchorsBySection.get(id) ?? [];
	list.push(anchor);
	anchorsBySection.set(id, list);
}

function setActive(activeId: string) {
	for (const [id, anchors] of anchorsBySection) {
		const active = id === activeId;
		for (const anchor of anchors) {
			anchor.classList.toggle("is-active", active);
			if (active) anchor.setAttribute("aria-current", "true");
			else anchor.removeAttribute("aria-current");
		}
	}
}

const spyObserver = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) setActive(entry.target.id);
		}
	},
	{ rootMargin: "-40% 0px -55% 0px" },
);

for (const id of anchorsBySection.keys()) {
	const section = document.getElementById(id);
	if (section) spyObserver.observe(section);
}

// Contadores: [data-count] anima de 0 al valor al entrar en viewport
const counters = document.querySelectorAll<HTMLElement>("[data-count]");

if (!reducedMotion && counters.length) {
	const counterObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				counterObserver.unobserve(entry.target);
				const el = entry.target as HTMLElement;
				const target = Number(el.dataset.count ?? 0);
				const suffix = el.dataset.suffix ?? "";
				const duration = 1400;
				const start = performance.now();
				const frame = (now: number) => {
					const progress = Math.min(1, (now - start) / duration);
					const eased = 1 - Math.pow(1 - progress, 3);
					el.textContent = Math.round(target * eased) + suffix;
					if (progress < 1) requestAnimationFrame(frame);
				};
				requestAnimationFrame(frame);
			}
		},
		{ threshold: 0.5 },
	);
	counters.forEach((el) => {
		el.textContent = "0" + (el.dataset.suffix ?? "");
		counterObserver.observe(el);
	});
}

// Timeline: la línea crece con el scroll a lo largo de [data-timeline]
const timeline = document.querySelector<HTMLElement>("[data-timeline]");
const timelineLine = timeline?.querySelector<HTMLElement>("[data-timeline-line]");

if (timeline && timelineLine) {
	if (reducedMotion) {
		timelineLine.style.transform = "scaleY(1)";
	} else {
		const updateLine = () => {
			const rect = timeline.getBoundingClientRect();
			const trigger = window.innerHeight * 0.75;
			const progress = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));
			timelineLine.style.transform = `scaleY(${progress})`;
		};
		let ticking = false;
		updateLine();
		window.addEventListener(
			"scroll",
			() => {
				if (ticking) return;
				ticking = true;
				requestAnimationFrame(() => {
					updateLine();
					ticking = false;
				});
			},
			{ passive: true },
		);
	}
}
