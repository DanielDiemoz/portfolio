import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { RevealOnScroll } from "@/components/Reveal";
import work01 from "@/assets/work-01.webp";
import work02 from "@/assets/work-02.webp";
import work07 from "@/assets/work-07.webp";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      {
        title: "Progetti | Daniel Diemoz — Sviluppatore Web Freelance",
      },
      {
        name: "description",
        content:
          "Progetti web realizzati da Daniel Diemoz, sviluppatore web freelance ad Aosta: webapp, siti aziendali, e-commerce e brand identity.",
      },
    ],
  }),
  component: Progetti,
});

const PROJECTS = [
  {
    n: "01",
    title: "GymBro - webapp per la palestra",
    cat: "Web · App",
    img: work07,
    span: "md:col-span-5",
    desc: "Webapp che traccia gli allenamenti, mostra i progressi e permette la competizione con gli amici tramite le cerchie (classifiche e sfide).",
    alt: "GymBro webapp palestra — allenamenti, progressi e competizione tra amici — Daniel Diemoz",
    ratio: "aspect-[4/5]",
    url: "https://mygymbro.org",
  },
  {
    n: "02",
    title: "Bianco&Legno",
    cat: "Web · Artigianato",
    img: work01,
    span: "md:col-span-7 md:row-span-2",
    desc: "Sito vetrina per un artigiano che riporta a nuova vita mobili e oggetti in legno: restauro, rinnovo e finiture su misura.",
    alt: "Bianco&Legno — restauro e rinnovo di mobili in legno — Daniel Diemoz",
    ratio: "aspect-[4/5]",
    url: "https://bianco-legno-artigiani.vercel.app",
  },
  {
    n: "03",
    title: "Casa Vacanze",
    cat: "Web · Turismo",
    img: work02,
    span: "md:col-span-5",
    desc: "Sito vetrina per una casa vacanze immersa nel verde: foto, informazioni e contatti per gli ospiti.",
    alt: "Casa Vacanze — sito vetrina per affitti turistici — Daniel Diemoz",
    ratio: "aspect-[4/5]",
    url: "https://casa-vacanze-gnomi.vercel.app/",
  },
];

function Progetti() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section
        id="work"
        className="px-5 md:px-10 pt-40 md:pt-48 pb-32 md:pb-48"
      >
        <div className="mb-24">
          <RevealOnScroll>
            <div className="font-mono-cap text-muted-foreground mb-4">
              (02) — Lavori selezionati
            </div>
            <h2 className="font-display text-[14vw] md:text-[7vw] leading-[0.85]">
              Progetti web realizzati
            </h2>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col gap-36 md:gap-56">
          {PROJECTS.map((p, i) => (
            <RevealOnScroll key={p.n}>
              <ProjectCard project={p} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center`}
    >
      <div
        className={`relative overflow-hidden md:col-span-6 ${project.ratio} bg-muted ${!isEven ? "md:order-2" : ""}`}
      >
        <motion.img
          src={project.img}
          alt={project.alt}
          loading="lazy"
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div
        className={`flex flex-col justify-center md:col-span-6 space-y-8 ${!isEven ? "md:order-1" : ""}`}
      >
        <div className="font-mono-cap text-muted-foreground">
          {project.n} · {project.cat}
        </div>
        <h3 className="font-display text-6xl md:text-7xl leading-[0.92]">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
          {project.desc}
        </p>
        <a
          href={project.url || "#contact"}
          target={project.url ? "_blank" : undefined}
          rel={project.url ? "noopener noreferrer" : undefined}
          className="font-mono-cap inline-block border-b border-foreground pb-1 w-fit hover:opacity-60 transition-opacity"
          data-cursor-hover
        >
          {project.url ? "Visita sito →" : "Vedi progetto →"}
        </a>
      </div>
    </div>
  );
}
