import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";

import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/unenv.mjs";


const LINKS = [
  { label: "Info", href: "#about" },
  { label: "Lavori", href: "#work" },
  { label: "Servizi", href: "#services" },
  { label: "Contatti", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-background/60 border-b border-border" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 md:px-10 py-5 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.a,
            {
              href: "#top",
              className: "font-display text-3xl tracking-wide leading-none font-normal bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]",
              style: {
                backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 30%, #aaa 50%, #fff 70%, #fff 100%)",
                backgroundSize: "200% 100%"
              },
              animate: { backgroundPosition: ["100% 0%", "-100% 0%"] },
              transition: { duration: 5, repeat: Infinity, ease: "linear" },
              children: "Daniel Diemoz"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "font-mono-cap hover:opacity-60 transition-opacity", children: l.label }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:block font-mono-cap", children: "<zome/>" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden font-mono-cap",
              onClick: () => setOpen((o) => !o),
              "aria-label": "Menu",
              children: open ? "Chiudi" : "Menu"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { y: "-100%" },
        animate: { y: 0 },
        exit: { y: "-100%" },
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
        className: "fixed inset-0 z-40 bg-background md:hidden flex flex-col justify-center px-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: LINKS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.li,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 + i * 0.08 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "font-display text-6xl block",
                children: l.label
              }
            )
          },
          l.href
        )) })
      }
    ) })
  ] });
}
function RevealText({ text, className = "", delay = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: `inline-block ${className}`, "aria-label": text, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom mr-[0.25em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className: "inline-block",
      initial: { y: "110%" },
      animate: { y: 0 },
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: delay + i * 0.06 },
      children: w
    }
  ) }, i)) });
}
function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  y = 40
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
      className,
      children
    }
  );
}
const work01 = "/assets/work-01-uaPeh04b.jpg";
const work02 = "/assets/work-02-BTfGOcX8.jpg";
const work03 = "/assets/work-03-B90IzN64.jpg";
const work04 = "/assets/work-04-BLTsZ4Xz.jpg";
const work05 = "/assets/work-05-e6P8HFgn.jpg";
const work06 = "/assets/work-06-CzqpRsxF.jpg";
const THEMES = {
  neon: ["#b57bee", "#5ec9f5", "#f55e9e", "#7bf5c5", "#f5c45e", "#ee7bbb", "#7bcdf5", "#f57b7b"],
  ember: ["#f5844a", "#f5c45e", "#ee5e7b", "#f5a33c", "#e85588", "#f5d080", "#f0704a", "#f59560"],
  ocean: ["#3ecccc", "#4a9ef5", "#5efaf0", "#5e9af5", "#1ad4a0", "#2ae0d0", "#60aff5", "#40d4b0"],
  candy: ["#f55eb0", "#c97bee", "#ee5e5e", "#f597ee", "#ee7b9e", "#d45ef5", "#f57bb5", "#ee9ef5"],
  soft: ["#c0c0c0", "#e8e8e8", "#a0a0a0", "#f0f0f0", "#b0b0b0", "#d8d8d8", "#888888", "#e0e0e0"]
};
const CONFIG = {
  theme: "soft",
  // 'neon' | 'ember' | 'ocean' | 'candy'
  arms: 4,
  // 2 – 8
  ratio: 5,
  // 2 – 11
  speed: 7e-3,
  // es. 4 → 0.012, 6 → 0.018
  maxTrail: 169
  // 100 – 1200
};
function hexToRgb(hex) {
  return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
}
function InfinityLoop({ className = "", style = {} }) {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let t = 0;
    let trailPts = [];
    let animId;
    function setup() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : 300;
      const h = Math.round(w * 0.9);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
      trailPts = [];
      ctx.clearRect(0, 0, w, h);
    }
    function draw() {
      const { arms, ratio, speed, maxTrail, theme } = CONFIG;
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;
      const cx = W / 2, cy = H / 2;
      const R = Math.min(cx, cy) * 0.93;
      t += speed;
      const pts = [];
      for (let a = 0; a < arms; a++) {
        const phase = a / arms * Math.PI * 2;
        const x = cx + R * 0.54 * Math.cos(t + phase) + R * 0.32 * Math.cos(ratio * t + phase);
        const y = cy + R * 0.54 * Math.sin(t + phase) + R * 0.32 * Math.sin(ratio * t + phase);
        pts.push({ x, y });
      }
      trailPts.push(pts);
      if (trailPts.length > maxTrail) trailPts.shift();
      ctx.clearRect(0, 0, W, H);
      const colors = THEMES[theme];
      const len = trailPts.length;
      for (let i = 1; i < len; i++) {
        const alpha = i / len;
        const prev = trailPts[i - 1];
        const curr = trailPts[i];
        for (let a = 0; a < curr.length; a++) {
          if (!prev[a]) continue;
          const [r, g, b] = hexToRgb(colors[a % colors.length]);
          ctx.beginPath();
          ctx.moveTo(prev[a].x, prev[a].y);
          ctx.lineTo(curr[a].x, curr[a].y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.9})`;
          ctx.lineWidth = 2.5 + alpha * 5.5;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }
      const last = trailPts[trailPts.length - 1];
      if (last) {
        last.forEach((p, a) => {
          hexToRgb(colors[a % colors.length]);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(8,8,16,0.14)`;
          ctx.shadowColor = colors[a % colors.length];
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }
      animId = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", setup);
    setup();
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setup);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, style: { position: "relative", width: "50%", maxWidth: "680px", borderRadius: "54px", overflow: "hidden", ...style }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, style: { display: "block", width: "100%", background: "transparent" } }) });
}
const PROJECTS = [{
  n: "01",
  title: "Atlante",
  cat: "Brand · Web",
  img: work01,
  span: "md:col-span-7 md:row-span-2",
  desc: "Identità e sito per uno studio di architettura milanese.",
  ratio: "aspect-[4/5]"
}, {
  n: "02",
  title: "Nodo",
  cat: "Mobile · UX",
  img: work02,
  span: "md:col-span-5",
  desc: "App di mindfulness con interfaccia tattile e minimale.",
  ratio: "aspect-[4/3]"
}, {
  n: "03",
  title: "Forma",
  cat: "Editorial",
  img: work03,
  span: "md:col-span-5",
  desc: "Rivista digitale indipendente di cultura visiva.",
  ratio: "aspect-[4/3]"
}, {
  n: "04",
  title: "Vetro",
  cat: "Web · Motion",
  img: work04,
  span: "md:col-span-6",
  desc: "E-commerce per un brand di occhiali artigianali.",
  ratio: "aspect-[4/5]"
}, {
  n: "05",
  title: "Sale",
  cat: "Identità",
  img: work05,
  span: "md:col-span-6",
  desc: "Sistema d'identità per un ristorante di alta cucina.",
  ratio: "aspect-[4/3]"
}, {
  n: "06",
  title: "Orbita",
  cat: "Dashboard · SaaS",
  img: work06,
  span: "md:col-span-12",
  desc: "Piattaforma analytics per agenzie creative.",
  ratio: "aspect-[16/9]"
}];
const SERVICES = [{
  n: "01",
  title: "UI Design",
  desc: "Interfacce digitali che bilanciano forma, funzione e personalità."
}, {
  n: "02",
  title: "UX Research",
  desc: "Ricerca qualitativa, test di usabilità, mappature di flusso."
}, {
  n: "03",
  title: "Prototipazione",
  desc: "Prototipi ad alta fedeltà per validare prima di costruire."
}, {
  n: "04",
  title: "Branding",
  desc: "Sistemi visivi coerenti dal logo al touchpoint digitale."
}, {
  n: "05",
  title: "Web Design",
  desc: "Siti editoriali, portfolio, landing page che convertono."
}];
const SKILLS = ["Figma", "Webflow", "Framer", "After Effects", "Design Systems", "Motion", "Strategia", "Typography", "Art Direction", "Brand Identity"];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col justify-end px-5 md:px-10 pb-12 pt-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "noise" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-40 top-1/4 w-[60vw] h-[60vw] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-10 top-1/4 w-[45vw] h-[35vw] opacity-[0.07] pointer-events-none hidden md:block", style: {
      backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
      backgroundSize: "32px 32px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "absolute -left-20 top-24 w-[30vw] h-[30vw] border border-border", animate: {
      rotate: -360
    }, transition: {
      duration: 120,
      repeat: Infinity,
      ease: "linear"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.2
      }, className: "font-mono-cap text-muted-foreground mb-8 flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Portfolio · 2026 — Indice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Aosta · IT" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display leading-[0.82] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { text: "Daniel", as: "span", className: "text-[14vw] md:text-[8.3vw] font-normal bg-[linear-gradient(135deg,_#1a1a1a_0%,_#666_40%,_#555_60%,_#111_100%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]", delay: 0.3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { text: "Diemoz", as: "span", className: "text-[14vw] md:text-[8.7vw] font-bold bg-[linear-gradient(135deg,_#555_0%,_#ccc_40%,_#ccc_60%,_#444_100%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]", delay: 0.5 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: 0.8,
          duration: 1
        }, className: "w-full md:w-[400px] lg:w-[560px] shrink-0 md:relative md:-left-[130px] md:top-[0px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "flex",
          justifyContent: "flex-start"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InfinityLoop, { style: {
          width: "100%"
        } }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.4,
          duration: 0.8
        }, className: "max-w-md text-base md:text-lg text-muted-foreground", children: "Siti web moderni e professionali, sviluppati con cura per offrire risultati concreti.          " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#work", initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1.6
        }, className: "font-mono-cap flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "block w-px h-12 bg-foreground origin-top", animate: {
            scaleY: [0, 1, 1, 0]
          }, transition: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scorri verso il basso" })
        ] })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "px-5 md:px-10 py-32 md:py-48 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-16", children: "(01) — Chi sono" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { className: "md:col-span-8", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[10vw] md:text-[7vw] leading-[0.9]", children: "Oltre l'estetica, verso i risultati." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { className: "md:col-span-4 md:col-start-9 md:pt-20 space-y-5", delay: 0.25, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed", children: "Creo interfacce, sistemi di brand e prodotti digitali progettati per essere chiari, efficaci e orientati alla performance. Il focus non è solo come qualcosa appare, ma come funziona e cosa produce." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base leading-relaxed", children: "Il mio lavoro unisce struttura e sensibilità visiva, con attenzione a ogni dettaglio che incide sull’esperienza e sulla conversione.  " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm font-mono-cap tracking-widest pt-2 border-t border-foreground/10", children: "Disponibile per nuovi progetti Q2 2026." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-24 md:mt-40 grid grid-cols-2 md:grid-cols-4 gap-y-12 border-t border-border pt-12", children: [{
      n: "Consegna rapida",
      l: "Online prima di quanto pensi"
    }, {
      n: "Zero pensieri",
      l: "Pensiamo a tutto noi"
    }, {
      n: "Supporto incluso",
      l: "Sempre presenti dopo il lancio"
    }, {
      n: "Cresci online",
      l: "Visibile dove cercano i tuoi clienti"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { delay: i * 0.1, className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl leading-none", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mt-3", children: s.l })
    ] }, s.l)) })
  ] });
}
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "px-5 md:px-10 py-32 md:py-48 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-end mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-4", children: "(02) — Lavori selezionati" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[14vw] md:text-[8vw] leading-[0.85]", children: "Archivio." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-32 md:gap-48", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, index: i }) }, p.n)) })
  ] });
}
function ProjectCard({
  project,
  index
}) {
  const isEven = index % 2 === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative overflow-hidden ${project.ratio} bg-muted ${!isEven ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: project.img, alt: project.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover grayscale", whileHover: {
      scale: 1.04
    }, transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col justify-center space-y-6 ${!isEven ? "md:order-1" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono-cap text-muted-foreground", children: [
        project.n,
        " · ",
        project.cat
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-5xl md:text-6xl leading-none", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: project.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "font-mono-cap inline-block border-b border-foreground pb-1 w-fit hover:opacity-60 transition-opacity", "data-cursor-hover": true, children: "Vedi progetto →" })
    ] })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 border-b border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl md:text-7xl px-8 flex items-center gap-8 leading-none", children: [
      s,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "✱" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 md:px-10 pt-32 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-4", children: "(03) — Servizi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[14vw] md:text-[8vw] leading-[0.85]", children: "Cosa faccio." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceRow, { service: s }, s.n)) })
  ] });
}
function ServiceRow({
  service
}) {
  const [hover, setHover] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative border-t border-border overflow-hidden", onHoverStart: () => setHover(true), onHoverEnd: () => setHover(false), initial: "rest", whileHover: "hover", "data-cursor-hover": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute inset-0 bg-foreground origin-bottom", initial: {
      scaleY: 0
    }, animate: {
      scaleY: hover ? 1 : 0
    }, transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1]
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative grid grid-cols-12 items-center px-5 md:px-10 py-10 md:py-14 transition-colors duration-300 ${hover ? "text-background" : "text-foreground"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 font-mono-cap", children: service.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-7 md:col-span-6 font-display text-5xl md:text-8xl leading-none", children: service.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block col-span-3 text-sm opacity-80", children: service.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-1 text-right font-mono-cap", children: "→" })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "px-5 md:px-10 py-32 md:py-48 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-8", children: "(04) — Contatti" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[16vw] md:text-[12vw] leading-[0.85]", children: [
      "Lavoriamo",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "insieme." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-3", children: "Email diretta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:ciao@Diemoz.studio", className: "font-display text-4xl md:text-6xl break-all border-b border-border pb-3 inline-block hover:border-foreground transition-colors", "data-cursor-hover": true, children: "danieldiemoz@zome.it" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-2", children: "Telefono" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+393382313527", className: "text-xl", "data-cursor-hover": true, children: "+39 333 12 34 567" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { delay: 0.1, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-2", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/393331234567", className: "text-xl", "data-cursor-hover": true, children: "Scrivimi →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealOnScroll, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono-cap text-muted-foreground mb-4", children: "Altrove" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 font-mono-cap", children: ["LinkedIn", "Behance", "Instagram"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "border-b border-border hover:border-foreground pb-1", "data-cursor-hover": true, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevealOnScroll, { className: "md:col-span-6 md:col-start-7", delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
    ] })
  ] });
}
function ContactForm() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    setSent(true);
  }, className: "space-y-8", children: [
    [{
      id: "name",
      label: "Nome",
      type: "text"
    }, {
      id: "email",
      label: "Email",
      type: "email"
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-cap text-muted-foreground", children: f.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: f.id, type: f.type, required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg" })
    ] }, f.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-cap text-muted-foreground", children: "Messaggio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, className: "mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group relative overflow-hidden border border-foreground px-10 py-5 font-mono-cap inline-block", "data-cursor-hover": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative group-hover:text-background transition-colors duration-500", children: sent ? "Inviato — grazie." : "Invia messaggio →" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border px-5 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:justify-between font-mono-cap text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Diemoz Studio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Costruito a mano in Milano" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", "data-cursor-hover": true, children: "Torna su ↑" })
  ] }) });
}
export {
  Index as component
};
