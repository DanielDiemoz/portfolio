import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

// ─────────────────────────────────────────────
// CONFIGURAZIONE — modifica questi valori
// ─────────────────────────────────────────────

const TOTAL_FRAMES = 144;
const FRAMES_PATH = "/frames"; // cartella pubblica con i tuoi frame
const FRAME_PREFIX = "frame_"; // es. frame_0001.png
const FRAME_DIGITS = 4; // zero-padding: 0001, 0002...
const FRAME_EXT = "png";

// Quanta altezza di scroll per percorrere tutti i frame
// es. "300vh" = devi scrollare 3 volte l'altezza dello schermo
const SCROLL_HEIGHT = "350vh";

// ─────────────────────────────────────────────

function padNumber(n: number, digits: number) {
  return String(n).padStart(digits, "0");
}

function getFrameUrl(index: number) {
  return `${FRAMES_PATH}/${FRAME_PREFIX}${padNumber(index + 1, FRAME_DIGITS)}.${FRAME_EXT}`;
}

export function MacbookScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll progress relativo al container sticky
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mappa il progresso scroll → indice frame
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Precarica tutti i frame
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
          // Disegna il primo frame subito
          drawFrame(0, images);
        }
      };
      images.push(img);
    }
  }, []);

  function drawFrame(index: number, images?: HTMLImageElement[]) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imgs = images ?? imagesRef.current;
    const img = imgs[Math.round(index)];
    if (!img || !img.complete) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }

  // Aggiorna il canvas ad ogni cambio di frameIndex
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (v) => {
      drawFrame(Math.round(v));
    });
    return unsubscribe;
  }, [frameIndex]);

  return (
    // Container alto quanto SCROLL_HEIGHT — crea lo spazio di scroll
    <div
      ref={containerRef}
      style={{ height: SCROLL_HEIGHT }}
      className="relative w-full"
    >
      {/* Sticky wrapper — rimane in viewport mentre si scrolla */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Label scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-white/30 tracking-widest uppercase"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: loaded ? "block" : "none" }}
        >
          Scrolla per esplorare ↓
        </motion.div>

        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background z-10">
            <div className="font-mono text-xs text-white/40 tracking-widest uppercase">
              Caricamento {loadProgress}%
            </div>
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/60"
                style={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        )}

        {/* Canvas con i frame animati */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl px-4 md:px-10"
        >
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-auto"
            style={{ imageRendering: "auto" }}
          />
        </motion.div>

        {/* Overlay gradient top e bottom per blend con il resto della pagina */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}