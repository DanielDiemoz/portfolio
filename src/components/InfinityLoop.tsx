
import { useEffect, useRef } from 'react';

const THEMES = {
   neon: ['#b57bee','#5ec9f5','#f55e9e','#7bf5c5','#f5c45e','#ee7bbb','#7bcdf5','#f57b7b'],
  ember: ['#f5844a','#f5c45e','#ee5e7b','#f5a33c','#e85588','#f5d080','#f0704a','#f59560'],
  ocean: ['#3ecccc','#4a9ef5','#5efaf0','#5e9af5','#1ad4a0','#2ae0d0','#60aff5','#40d4b0'],
  candy: ['#f55eb0','#c97bee','#ee5e5e','#f597ee','#ee7b9e','#d45ef5','#f57bb5','#ee9ef5'],
   soft: ['#c0c0c0','#e8e8e8','#a0a0a0','#f0f0f0','#b0b0b0','#d8d8d8','#888888','#e0e0e0'],
};

const CONFIG = {
  theme:    'soft',   // 'neon' | 'ember' | 'ocean' | 'candy'
  arms:     4,        // 2 – 8
  ratio:    5,        // 2 – 11
  speed:    0.007,    // es. 4 → 0.012, 6 → 0.018
  maxTrail: 169,      // 100 – 1200
};

function hexToRgb(hex: string) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
}

export default function InfinityLoop({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let t = 0;
    let trailPts = [];
    let animId;

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap a 2
      const isMobile = window.innerWidth < 768;
      const w = canvas.parentElement ? canvas.parentElement.clientWidth : 300;
      const h = Math.round(w * 0.9);
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      trailPts = [];
      ctx.clearRect(0, 0, w, h);
    }
    
    function draw() {
      const isMobile = window.innerWidth < 768;
      const { arms, ratio, maxTrail, theme } = CONFIG;
      const speed = isMobile ? CONFIG.speed * 2.5 : CONFIG.speed;      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width  / dpr;
      const H = canvas.height / dpr;
      const cx = W / 2, cy = H / 2;
      const R  = Math.min(cx, cy) * 0.93;

      t += speed;

      const pts = [];
      for (let a = 0; a < arms; a++) {
        const phase = (a / arms) * Math.PI * 2;
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
        const prev = trailPts[i-1];
        const curr = trailPts[i];
        for (let a = 0; a < curr.length; a++) {
          if (!prev[a]) continue;
          const [r,g,b] = hexToRgb(colors[a % colors.length]);
          ctx.beginPath();
          ctx.moveTo(prev[a].x, prev[a].y);
          ctx.lineTo(curr[a].x, curr[a].y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.9})`;
          ctx.lineWidth = 2.5 + alpha * 5.5;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      const last = trailPts[trailPts.length - 1];
      if (last) {
        last.forEach((p, a) => {
          const [r,g,b] = hexToRgb(colors[a % colors.length]);
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

    window.addEventListener('resize', setup);
    setup();
    draw();

    // pulizia quando il componente viene smontato
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <div className={className} style={{ position:'relative', width:'50%', maxWidth:'680px', borderRadius:'54px', overflow:'hidden', ...style }}>
      <canvas ref={canvasRef} style={{ display:'block', width:'100%', background:'transparent' }} />
    </div>
  );
}