import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Nav } from "@/components/Nav";
import { RevealText, RevealOnScroll } from "@/components/Reveal";
import { Analytics } from "@vercel/analytics/next"
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-01.jpg";
import work03 from "@/assets/work-01.jpg";
import work04 from "@/assets/work-01.jpg";
import work05 from "@/assets/work-01.jpg";
import work06 from "@/assets/work-01.jpg";
import InfinityLoop from "@/components/InfinityLoop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Daniel Diemoz, sviluppatore web freelance in Italia. Realizzo siti vetrina e aziendali professionali, veloci e ottimizzati per convertire visitatori in clienti. Contattami per un preventivo gratuito.",
      },
      {
        property: "og:title",
        content: "Daniel Diemoz | Sviluppatore Web Freelance — Siti Professionali per Aziende",
      },
      {
        property: "og:description",
        content: "Siti vetrina e aziendali professionali per il mercato italiano. Sviluppo web su misura.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Daniel Diemoz — Sviluppo Web Freelance",
          url: "https://danieldiemoz.it",
          description:
            "Sviluppatore web freelance in Italia. Realizzo siti vetrina e aziendali professionali per piccole e medie imprese.",
          founder: {
            "@type": "Person",
            name: "Daniel Diemoz",
            jobTitle: "Sviluppatore Web Freelance",
            url: "https://danieldiemoz.it",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Aosta",
            addressCountry: "IT",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+39-338-2313527",
            email: "info@danieldiemoz.it",
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
          Sviluppatore web freelance in Italia. Realizzo siti vetrina e aziendali professionali, progettati per far crescere la tua attività e trasformare i visitatori in clienti.          </motion.p>

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
          <h2 className="font-display [linear-gradient(135deg,_#555_0%,_#ccc_40%,_#ccc_60%,_#444_100%)] text-[10vw] md:text-[7vw] leading-[0.9]">
            Sviluppo siti web professionali per aziende italiane
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-4 md:col-start-9 md:pt-20 space-y-5" delay={0.25}>
          <p className="text-foreground/70 text-base leading-relaxed">
            Sono Daniel Diemoz, sviluppatore web freelance con base ad Aosta. Aiuto piccole e medie imprese italiane a costruire la loro presenza online con siti web professionali, veloci e progettati per ottenere risultati concreti: più contatti, più clienti, più visibilità.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed">
            Ogni sito che realizzo unisce design moderno, usabilità e performance tecniche. Mi occupo personalmente di ogni fase: dall'analisi delle esigenze alla pubblicazione online, con supporto continuo dopo il lancio.
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
              href="mailto:info@danieldiemoz.it"
              className="font-display text-4xl md:text-6xl break-all border-b border-border pb-3 inline-block hover:border-foreground transition-colors"
              data-cursor-hover
            >
              info@danieldiemoz.it
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
            Raccontami il tuo progetto. Ti rispondo entro 24 ore con un preventivo personalizzato e senza impegno.
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