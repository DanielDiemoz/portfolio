import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { label: "Info", href: "#about" },
  { label: "Lavori", href: "#work" },
  { label: "Servizi", href: "#services" },
  { label: "Contatti", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-background/60 border-b border-border" : ""
        }`}
      >
      <div className="flex items-center justify-between px-5 md:px-10 py-5 relative">
      <motion.a
  href="#top"
  className="font-display text-3xl tracking-wide leading-none font-normal bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
  style={{
    backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 30%, #aaa 50%, #fff 70%, #fff 100%)",
    backgroundSize: "200% 100%",
  }}
  animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }}
  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
>
  Daniel Diemoz
</motion.a>
      <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="font-mono-cap hover:opacity-60 transition-opacity">
            {l.label}
          </a>
        ))}
      </nav>
      <span className="hidden md:block font-mono-cap">&lt;zome/&gt;</span>
      <button
        className="md:hidden font-mono-cap"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
      >
        {open ? "Chiudi" : "Menu"}
      </button>
    </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col justify-center px-8"
          >
            <ul className="space-y-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-6xl block"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
