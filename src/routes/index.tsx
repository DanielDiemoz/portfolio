import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { RevealText, RevealOnScroll } from "@/components/Reveal";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";
import InfinityLoop from "@/components/InfinityLoop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Portfolio brutalist di un designer UI/UX indipendente. Esperienze digitali che colpiscono duro.",
      },
      { property: "og:title", content: "Zome — UI/UX Designer" },
      { property: "og:description", content: "Esperienze digitali che colpiscono duro." },
    ],
  }),
  component: Index,
});


const PROJECTS = [
  { n: "01", title: "Atlante", cat: "Brand · Web", img: work01, span: "md:col-span-7 md:row-span-2", desc: "Identità e sito per uno studio di architettura milanese.", ratio: "aspect-[4/5]" },
  { n: "02", title: "Nodo", cat: "Mobile · UX", img: work02, span: "md:col-span-5", desc: "App di mindfulness con interfaccia tattile e minimale.", ratio: "aspect-[4/3]" },
  { n: "03", title: "Forma", cat: "Editorial", img: work03, span: "md:col-span-5", desc: "Rivista digitale indipendente di cultura visiva.", ratio: "aspect-[4/3]" },
  { n: "04", title: "Vetro", cat: "Web · Motion", img: work04, span: "md:col-span-6", desc: "E-commerce per un brand di occhiali artigianali.", ratio: "aspect-[4/5]" },
  { n: "05", title: "Sale", cat: "Identità", img: work05, span: "md:col-span-6", desc: "Sistema d'identità per un ristorante di alta cucina.", ratio: "aspect-[4/3]" },
  { n: "06", title: "Orbita", cat: "Dashboard · SaaS", img: work06, span: "md:col-span-12", desc: "Piattaforma analytics per agenzie creative.", ratio: "aspect-[16/9]" },
];

const SERVICES = [
  { n: "01", title: "UI Design", desc: "Interfacce digitali che bilanciano forma, funzione e personalità." },
  { n: "02", title: "UX Research", desc: "Ricerca qualitativa, test di usabilità, mappature di flusso." },
  { n: "03", title: "Prototipazione", desc: "Prototipi ad alta fedeltà per validare prima di costruire." },
  { n: "04", title: "Branding", desc: "Sistemi visivi coerenti dal logo al touchpoint digitale." },
  { n: "05", title: "Web Design", desc: "Siti editoriali, portfolio, landing page che convertono." },
];

const SKILLS = ["Figma", "Webflow", "Framer", "After Effects", "Design Systems", "Motion", "Strategia", "Typography", "Art Direction", "Brand Identity"];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-5 md:px-10 pb-12 pt-32 overflow-hidden">
      <div className="noise" />
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 w-[60vw] h-[60vw] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-10 top-1/4 w-[45vw] h-[35vw] opacity-[0.07] pointer-events-none hidden md:block"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute -left-20 top-24 w-[30vw] h-[30vw] border border-border"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono-cap text-muted-foreground mb-8 flex justify-between"
        >
          <span>Portfolio · 2026 — Indice</span>
          <span className="hidden md:inline">Aosta · IT</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h1 className="font-display leading-[0.82] tracking-tight">
        <div>
          <RevealText
            text="Daniel"
            as="span"
            className="text-[14vw] md:text-[8.3vw] font-normal bg-[linear-gradient(135deg,_#1a1a1a_0%,_#666_40%,_#555_60%,_#111_100%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            delay={0.3}
          />
        </div>
        <div>
          <RevealText
            text="Diemoz"
            as="span"
            className="text-[14vw] md:text-[8.7vw] font-bold bg-[linear-gradient(135deg,_#555_0%,_#ccc_40%,_#ccc_60%,_#444_100%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            delay={0.5}
          />
        </div>
      </h1>
      <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full md:w-[400px] lg:w-[560px] shrink-0 md:relative md:-left-[130px] md:top-[0px]"
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <InfinityLoop style={{ width: "100%" }} />
            </div>

          </motion.div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-md text-base md:text-lg text-muted-foreground"
          >
          Siti web moderni e professionali, sviluppati con cura per offrire risultati concreti.          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="font-mono-cap flex items-center gap-3 group"
          >
            <motion.span
              className="block w-px h-12 bg-foreground origin-top"
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>Scorri verso il basso</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 md:px-10 py-32 md:py-48 border-t border-border">
      <RevealOnScroll>
        <div className="font-mono-cap text-muted-foreground mb-16">(01) — Chi sono</div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <RevealOnScroll className="md:col-span-8" delay={0.1}>
          <h2 className="font-display text-[10vw] md:text-[7vw] leading-[0.9]">
            Oltre l'estetica, verso i risultati.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-4 md:col-start-9 md:pt-20 space-y-5" delay={0.25}>
          <p className="text-foreground/70 text-base leading-relaxed">
            Creo interfacce, sistemi di brand e prodotti digitali progettati per essere chiari, efficaci e orientati alla performance. Il focus non è solo come qualcosa appare, ma come funziona e cosa produce.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed">
            Il mio lavoro unisce struttura e sensibilità visiva, con attenzione a ogni dettaglio che incide sull’esperienza e sulla conversione.  </p>
          <p className="text-foreground text-sm font-mono-cap tracking-widest pt-2 border-t border-foreground/10">
            Disponibile per nuovi progetti Q2 2026.
          </p>
      </RevealOnScroll>
      </div>

      <div className="mt-24 md:mt-40 grid grid-cols-2 md:grid-cols-4 gap-y-12 border-t border-border pt-12">
  {[
    { n: "Consegna rapida", l: "Online prima di quanto pensi" },
    { n: "Zero pensieri", l: "Pensiamo a tutto noi" },
    { n: "Supporto incluso", l: "Sempre presenti dopo il lancio" },
    { n: "Cresci online", l: "Visibile dove cercano i tuoi clienti" },
  ].map((s, i) => (
    <RevealOnScroll key={s.l} delay={i * 0.1} className="flex flex-col items-center text-center">
      <div className="font-display text-2xl md:text-3xl leading-none">{s.n}</div>
      <div className="font-mono-cap text-muted-foreground mt-3">{s.l}</div>
    </RevealOnScroll>
  ))}
</div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="px-5 md:px-10 py-32 md:py-48 border-t border-border">
      <div className="flex justify-between items-end mb-16">
        <RevealOnScroll>
          <div className="font-mono-cap text-muted-foreground mb-4">(02) — Lavori selezionati</div>
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.85]">Archivio.</h2>
        </RevealOnScroll>
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {PROJECTS.map((p, i) => (
          <RevealOnScroll key={p.n}>
            <ProjectCard project={p} index={i} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
      {/* Immagine */}
      <div className={`relative overflow-hidden ${project.ratio} bg-muted ${!isEven ? "md:order-2" : ""}`}>
        <motion.img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Testo */}
      <div className={`flex flex-col justify-center space-y-6 ${!isEven ? "md:order-1" : ""}`}>
        <div className="font-mono-cap text-muted-foreground">{project.n} · {project.cat}</div>
        <h3 className="font-display text-5xl md:text-6xl leading-none">{project.title}</h3>
        <p className="text-muted-foreground text-lg">{project.desc}</p>
        <a
          href="#contact"
          className="font-mono-cap inline-block border-b border-foreground pb-1 w-fit hover:opacity-60 transition-opacity"
          data-cursor-hover
        >
          Vedi progetto →
        </a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="py-10 border-b border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl px-8 flex items-center gap-8 leading-none">
              {s} <span className="text-muted-foreground">✱</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-10 pt-32 pb-8">
        <RevealOnScroll>
          <div className="font-mono-cap text-muted-foreground mb-4">(03) — Servizi</div>
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.85]">Cosa faccio.</h2>
        </RevealOnScroll>
      </div>

      <div>
        {SERVICES.map((s) => (
          <ServiceRow key={s.n} service={s} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service }: { service: (typeof SERVICES)[number] }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="relative border-t border-border overflow-hidden"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial="rest"
      whileHover="hover"
      data-cursor-hover
    >
      <motion.div
        className="absolute inset-0 bg-foreground origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hover ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <div className={`relative grid grid-cols-12 items-center px-5 md:px-10 py-10 md:py-14 transition-colors duration-300 ${hover ? "text-background" : "text-foreground"}`}>
        <div className="col-span-2 font-mono-cap">{service.n}</div>
        <div className="col-span-7 md:col-span-6 font-display text-5xl md:text-8xl leading-none">{service.title}</div>
        <div className="hidden md:block col-span-3 text-sm opacity-80">{service.desc}</div>
        <div className="col-span-3 md:col-span-1 text-right font-mono-cap">→</div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 md:px-10 py-32 md:py-48 border-t border-border">
      <RevealOnScroll>
        <div className="font-mono-cap text-muted-foreground mb-8">(04) — Contatti</div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <h2 className="font-display text-[16vw] md:text-[12vw] leading-[0.85]">
          Lavoriamo
          <br />
          <span className="italic">insieme.</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24">
        <div className="md:col-span-6 space-y-12">
          <RevealOnScroll>
            <div className="font-mono-cap text-muted-foreground mb-3">Email diretta</div>
            <a
              href="mailto:ciao@Diemoz.studio"
              className="font-display text-4xl md:text-6xl break-all border-b border-border pb-3 inline-block hover:border-foreground transition-colors"
              data-cursor-hover
            >
              danieldiemoz@zome.it
            </a>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="font-mono-cap text-muted-foreground mb-2">Telefono</div>
              <a href="tel:+393382313527" className="text-xl" data-cursor-hover>+39 333 12 34 567</a>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="font-mono-cap text-muted-foreground mb-2">WhatsApp</div>
              <a href="https://wa.me/393331234567" className="text-xl" data-cursor-hover>Scrivimi →</a>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="font-mono-cap text-muted-foreground mb-4">Altrove</div>
            <div className="flex gap-6 font-mono-cap">
              {["LinkedIn", "Behance", "Instagram"].map((s) => (
                <a key={s} href="#" className="border-b border-border hover:border-foreground pb-1" data-cursor-hover>{s}</a>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="md:col-span-6 md:col-start-7" delay={0.2}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8"
    >
      {[
        { id: "name", label: "Nome", type: "text" },
        { id: "email", label: "Email", type: "email" },
      ].map((f) => (
        <label key={f.id} className="block">
          <span className="font-mono-cap text-muted-foreground">{f.label}</span>
          <input
            id={f.id}
            type={f.type}
            required
            className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg"
          />
        </label>
      ))}
      <label className="block">
        <span className="font-mono-cap text-muted-foreground">Messaggio</span>
        <textarea
          required
          rows={4}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none"
        />
      </label>

      <button
        type="submit"
        className="group relative overflow-hidden border border-foreground px-10 py-5 font-mono-cap inline-block"
        data-cursor-hover
      >
        <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        <span className="relative group-hover:text-background transition-colors duration-500">
          {sent ? "Inviato — grazie." : "Invia messaggio →"}
        </span>
      </button>
    </form>
  );
}

function Footer() {
  return (
    <>
      <footer className="border-t border-border px-5 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:justify-between font-mono-cap text-muted-foreground">
        <span>© 2026 Diemoz Studio</span>
        <span>Costruito a mano in Milano</span>
        <a href="#top" data-cursor-hover>Torna su ↑</a>
      </footer>
    </>
  );
}