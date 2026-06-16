import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Nav } from "@/components/Nav";
import { RevealOnScroll } from "@/components/Reveal";
import work01 from "@/assets/work-01.webp";
import work02 from "@/assets/work-02.webp";
import work03 from "@/assets/work-03.webp";
import work04 from "@/assets/work-04.webp";
import work05 from "@/assets/work-05.webp";
import work06 from "@/assets/work-06.webp";
const SplineScene = lazy(() =>
  import("@/components/ui/splite").then((m) => ({ default: m.SplineScene }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Daniel Diemoz, sviluppatore web freelance ad Aosta. Realizzo siti vetrina e aziendali professionali, veloci e ottimizzati per convertire visitatori in clienti. Contattami per un preventivo gratuito.",
      },
      {
        property: "og:title",
        content: "Daniel Diemoz | Sviluppatore Web Freelance ad Aosta — Siti Professionali per Aziende",
      },
      {
        property: "og:description",
        content: "Daniel Diemoz, sviluppatore web freelance. Siti vetrina e aziendali professionali per il mercato italiano. Sviluppo web su misura, design moderno, SEO e performance.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Daniel Diemoz — Sviluppatore Web Freelance",
          url: "https://danieldiemoz.com",
          description:
            "Daniel Diemoz, sviluppatore web freelance ad Aosta. Realizzo siti vetrina e aziendali professionali per piccole e medie imprese italiane.",
          image: "https://danieldiemoz.com/og-image.jpg",
          founder: {
            "@type": "Person",
            name: "Daniel Diemoz",
            jobTitle: "Sviluppatore Web Freelance",
            url: "https://danieldiemoz.com",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Aosta",
            addressRegion: "Valle d'Aosta",
            addressCountry: "IT",
          },
          areaServed: {
            "@type": "Country",
            name: "Italia",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+39-338-2313527",
            email: "info@danieldiemoz.com",
            contactType: "customer service",
            availableLanguage: ["Italian"],
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servizi di Sviluppo Web",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Realizzazione Siti Vetrina",
                  description: "Siti web professionali per aziende e professionisti",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Siti Web Aziendali",
                  description: "Sviluppo siti web completi per piccole e medie imprese",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "UI/UX Design",
                  description: "Design di interfacce moderne e funzionali",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
});


const PROJECTS = [
  { n: "01", title: "Atlante", cat: "Brand · Web", img: work01, span: "md:col-span-7 md:row-span-2", desc: "Identità e sito per uno studio di architettura milanese.", alt: "Sito web aziendale per studio di architettura Milano — realizzato da Daniel Diemoz", ratio: "aspect-[4/5]" },
  { n: "02", title: "Nodo", cat: "Mobile · UX", img: work02, span: "md:col-span-5", desc: "App di mindfulness con interfaccia tattile e minimale.", alt: "App mobile mindfulness con design UI/UX minimalista — Daniel Diemoz", ratio: "aspect-[4/3]" },
  { n: "03", title: "Forma", cat: "Editorial", img: work03, span: "md:col-span-5", desc: "Rivista digitale indipendente di cultura visiva.", alt: "Rivista digitale indipendente di cultura visiva — design editoriale Daniel Diemoz", ratio: "aspect-[4/3]" },
  { n: "04", title: "Vetro", cat: "Web · Motion", img: work04, span: "md:col-span-6", desc: "E-commerce per un brand di occhiali artigianali.", alt: "E-commerce artigianale per brand occhiali — design web Daniel Diemoz", ratio: "aspect-[4/5]" },
  { n: "05", title: "Sale", cat: "Identità", img: work05, span: "md:col-span-6", desc: "Sistema d'identità per un ristorante di alta cucina.", alt: "Brand identity per ristorante di alta cucina — Daniel Diemoz", ratio: "aspect-[4/3]" },
  { n: "06", title: "Orbita", cat: "Dashboard · SaaS", img: work06, span: "md:col-span-12", desc: "Piattaforma analytics per agenzie creative.", alt: "Dashboard analytics SaaS per agenzie creative — Daniel Diemoz", ratio: "aspect-[16/9]" },
];

const SERVICES = [

  {
    n: "01",
    title: "Siti Vetrina",
    desc: "Il primo passo per portare online la tua attività. Realizzo siti vetrina professionali, ottimizzati per i motori di ricerca e progettati per presentare al meglio i tuoi servizi e convertire i visitatori in clienti."
  },

  {
    n: "02",
    title: "Siti Aziendali",
    desc: "Soluzioni web complete per piccole e medie imprese. Siti aziendali su misura, veloci, sicuri e facili da gestire, pensati per crescere insieme alla tua azienda e rafforzare la tua presenza online."
  },

  {
    n: "03",
    title: "UI/UX Design",
    desc: "Interfacce moderne e intuitive che guidano i tuoi clienti verso l'azione desiderata: un acquisto, una richiesta di preventivo, una prenotazione. Design che unisce estetica e funzionalità per risultati misurabili."
  },

  {
    n: "04",
    title: "Ottimizzazione SEO",
    desc: "Ogni sito che realizzo è progettato per essere trovato su Google. Struttura tecnica ottimizzata, contenuti pensati per il posizionamento e best practice aggiornate per aumentare la visibilità della tua azienda."
  },

  {
    n: "05",
    title: "Consulenza & Supporto",
    desc: "Non ti lascio solo dopo il lancio. Offro assistenza continua, aggiornamenti e consulenza per far evolvere il tuo sito insieme alle esigenze della tua azienda. Un partner tecnico sempre al tuo fianco."
  },

];
const SKILLS = [
  "Sviluppo Web",
  "React",
  "TypeScript",
  "Siti Vetrina",
  "Siti Aziendali",
  "SEO",
  "UI/UX Design",
  "Performance",
  "Tailwind CSS",
  "Supporto Continuo"
];
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


const TECH_STACK = [
  { icon: "◻", label: "REACT" },
  { icon: "+", label: "NEXT.JS" },
  { icon: "✦", label: "TYPESCRIPT" },
  { icon: "◻", label: "TAILWIND CSS" },
];

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  const nameStyle = (delay: number, weight: number, letterSpacing: string): React.CSSProperties => ({
    ...fadeIn(delay),
    fontSize: "clamp(64px, 14vw, 140px)",
    fontWeight: weight,
    lineHeight: 1,
    margin: 0,
    letterSpacing,
    fontFamily: "var(--font-display)",
  });

  return (
    <section className="relative min-h-screen flex items-center px-5 md:px-10 overflow-hidden">
      <div className="noise" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 py-20 lg:py-0">
        {/* ── Left: text content ── */}
        <div className="flex flex-col lg:max-w-[55%]">
          {/* Intro */}
          <p
            style={{
              ...fadeIn(0),
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--color-muted-foreground)",
              fontWeight: 400,
              margin: "0 0 8px 0",
              letterSpacing: "0.02em",
            }}
          >
            Ciao, sono
          </p>

         <h1
        style={{
          fontSize: "clamp(64px, 14vw, 140px)",
          fontWeight: 300,
          lineHeight: 1,
          margin: 0,
          letterSpacing: "-0.02em",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        Daniel
      </h1>

          <h1
        style={{
          fontSize: "clamp(64px, 14vw, 140px)",
          fontWeight: 800,
          lineHeight: 1,
          margin: "0 0 28px 0",
          letterSpacing: "-0.03em",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s",
        }}
      >
        Diemoz
      </h1>

          {/* Badge */}
          <div
            style={{
              ...fadeIn(0.28),
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid var(--color-border)",
              borderRadius: "6px",
              padding: "6px 14px",
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-muted-foreground)",
              width: "fit-content",
              marginBottom: "36px",
            }}
          >
            <span style={{ color: "var(--color-foreground)" }}>+</span> SVILUPPATORE WEB FREELANCE
          </div>

          {/* Description */}
          <p
            style={{
              ...fadeIn(0.36),
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "var(--color-muted-foreground)",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "520px",
              margin: "0 0 40px 0",
            }}
          >
            Sviluppatore web freelance ad Aosta. Realizzo siti vetrina e
            aziendali professionali, ottimizzati per i motori di ricerca e
            progettati per convertire i visitatori in clienti.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              ...fadeIn(0.44),
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "52px",
            }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-7 py-3.5 text-[15px] font-semibold tracking-[0.01em] hover:opacity-90 transition-opacity"
            >
              Vedi i miei lavori
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border text-foreground px-7 py-3.5 text-[15px] font-medium tracking-[0.01em] hover:border-foreground/50 transition-colors"
            >
              Contattami
            </a>
          </div>

          {/* Tech stack tags */}
          <div
            style={{
              ...fadeIn(0.52),
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {TECH_STACK.map(({ icon, label }) => (
              <span
                key={label}
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "5px 12px",
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--color-muted-foreground)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px" }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: SplineScene 3D robot ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.65, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[45%] shrink-0"
        >
          <div className="w-full max-w-[800px] mx-auto lg:mx-0 aspect-[16/9]">
            <Suspense fallback={<div className="w-full h-full bg-muted/20 animate-pulse rounded-lg" />}>
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </Suspense>
          </div>
        </motion.div>
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
          <h2 className="font-display [linear-gradient(135deg,_#555_0%,_#ccc_40%,_#ccc_60%,_#444_100%)] text-[10vw] md:text-[7vw] leading-[0.9]">
            Sviluppo siti web professionali per aziende italiane
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-4 md:col-start-9 md:pt-20 space-y-5" delay={0.25}>
          <p className="text-foreground/70 text-base leading-relaxed">
            Sono Daniel Diemoz, sviluppatore web freelance con base ad Aosta. Aiuto piccole e medie imprese italiane a costruire la loro presenza online con siti professionali, veloci e ottimizzati per i motori di ricerca. L'obiettivo è semplice: trasformare il tuo sito web in uno strumento che porta risultati concreti — più contatti, più clienti, più fatturato.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed">
            Ogni progetto che seguo unisce design moderno, usabilità e performance tecniche. Mi occupo personalmente di ogni fase: dall'analisi delle tue esigenze alla pubblicazione online, con supporto continuo dopo il lancio.
          </p>
          <p className="text-foreground text-sm font-mono-cap tracking-widest pt-2 border-t border-foreground/10">
            Disponibile per nuovi progetti. Contattami per un preventivo gratuito.
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
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.85]">Progetti web realizzati</h2>
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
          alt={project.alt}
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
              {s} <span className="text-muted-foreground">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 md:px-10 pt-32 pb-8">
        <RevealOnScroll>
          <div className="font-mono-cap text-muted-foreground mb-4">(03) — Servizi</div>
          <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.85]">Servizi di sviluppo e design web</h2>
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
          Richiedi un preventivo
          <br />
          <span className="font-display text-[16vw] md:text-[12vw] leading-[0.85]">gratuito</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24">
        <div className="md:col-span-6 space-y-12">
          <RevealOnScroll>
            <div className="font-mono-cap text-muted-foreground mb-3">Email diretta</div>
            <a
              href="mailto:info@danieldiemoz.com"
              className="font-display text-4xl md:text-6xl break-all border-b border-border pb-3 inline-block hover:border-foreground transition-colors"
              data-cursor-hover
            >
              info@danieldiemoz.com
            </a>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="font-mono-cap text-muted-foreground mb-2">Telefono</div>
              <a href="tel:+393382313527" className="text-xl" data-cursor-hover>+39 338 23 13 527</a>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="font-mono-cap text-muted-foreground mb-2">WhatsApp</div>
              <a href="https://wa.me/393382313527" className="text-xl" data-cursor-hover>Scrivimi →</a>
            </RevealOnScroll>
          </div>

          {/* <RevealOnScroll>
            <div className="font-mono-cap text-muted-foreground mb-4">Altrove</div>
            <div className="flex gap-6 font-mono-cap">
              {["LinkedIn", "Behance", "Instagram"].map((s) => (
                <a key={s} href="#" className="border-b border-border hover:border-foreground pb-1" data-cursor-hover>{s}</a>
              ))}
            </div>
          </RevealOnScroll> */}
        </div>

        <RevealOnScroll className="md:col-span-6 md:col-start-7" delay={0.2}>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Hai un'idea o un progetto in mente? Raccontami cosa ti serve. Ti rispondo entro 24 ore con un preventivo personalizzato, chiaro e senza alcun impegno.
          </p>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target as HTMLFormElement);
    const res = await fetch("https://formspree.io/f/xqeobjzd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 4000);
    }
    setLoading(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      {[
        { id: "name", label: "Nome", type: "text" },
        { id: "email", label: "Email", type: "email" },
      ].map((f) => (
        <label key={f.id} className="block">
          <span className="font-mono-cap text-muted-foreground">{f.label}</span>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            required
            className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors duration-300"
          />
        </label>
      ))}
      <label className="block">
        <span className="font-mono-cap text-muted-foreground">Messaggio</span>
        <textarea
          name="message"
          required
          rows={4}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              (e.currentTarget.closest("form") as HTMLFormElement)?.requestSubmit();
            }
          }}
          className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg resize-none transition-colors duration-300"
        />
        <span className="text-xs text-muted-foreground mt-1 block">
          ctrl + invio per inviare
        </span>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="group relative overflow-hidden border border-foreground px-10 py-5 font-mono-cap inline-block disabled:opacity-50 disabled:cursor-not-allowed"
        data-cursor-hover
      >
        <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        <span className="relative group-hover:text-background transition-colors duration-500">
          {loading ? "Invio..." : sent ? "✓ Inviato" : "Invia messaggio →"}
        </span>
      </button>
    </form>
  );
}
function Footer() {
  return (
    <>
      <footer className="border-t border-border px-5 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:justify-between font-mono-cap text-muted-foreground">
        <span>© 2026 Daniel Diemoz</span>
        <span>Tutti i diritti riservati</span>
        <a href="#top" data-cursor-hover>Torna su ↑</a>
      </footer>
    </>
  );
}