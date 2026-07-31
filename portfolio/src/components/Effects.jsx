import { useEffect, useState, useRef } from 'react';

/* ── 1. Cursor sparkle trail ── */
const CursorSparkle = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const id = Date.now() + Math.random();
      const symbols = ['✿', '✦', '⋆', '♡', '·', '✳'];
      setSparks(prev => [
        ...prev.slice(-18),
        {
          id,
          x: e.clientX,
          y: e.clientY,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          color: ['#f9a8d4','#c4b5fd','#fde68a','#86efac','#fbcfe8'][Math.floor(Math.random()*5)],
          size: 10 + Math.random() * 10,
        },
      ]);
      setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 700);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {sparks.map(s => (
        <span
          key={s.id}
          style={{
            position: 'fixed',
            left: s.x,
            top: s.y,
            fontSize: s.size,
            color: s.color,
            transform: 'translate(-50%, -50%)',
            animation: 'sparkFade 0.7s ease forwards',
            userSelect: 'none',
          }}
        >
          {s.symbol}
        </span>
      ))}
      <style>{`
        @keyframes sparkFade {
          0%   { opacity: 1; transform: translate(-50%,-50%) scale(1) rotate(0deg); }
          100% { opacity: 0; transform: translate(-50%,-120%) scale(0.3) rotate(30deg); }
        }
      `}</style>
    </div>
  );
};

/* ── 2. Scroll progress bar ── */
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9998] pointer-events-none">
      <div
        style={{
          width: `${pct}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #f472b6, #be185d, #7c3aed)',
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(190,24,93,0.6)',
        }}
      />
    </div>
  );
};

/* ── 3. Scroll-to-top button ── */
const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full text-white text-lg
                 flex items-center justify-center shadow-lg
                 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #f472b6, #7c3aed)', boxShadow: '0 4px 20px rgba(190,24,93,0.4)' }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
};

/* ── 4. Fade-in on scroll ── */
export const useFadeIn = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in-visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

/* ── 5. Floating hearts in background ── */
const FloatingHearts = () => {
  const hearts = ['♡','✿','⋆','✦','·','❀'];
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: 'fixed',
            left: `${5 + i * 9.5}%`,
            bottom: '-2rem',
            fontSize: `${0.7 + (i % 3) * 0.3}rem`,
            color: ['rgba(249,168,212,0.25)','rgba(196,181,253,0.2)','rgba(253,230,138,0.2)'][i % 3],
            animation: `floatUp ${7 + (i % 5)}s ease-in infinite`,
            animationDelay: `${i * 0.9}s`,
            userSelect: 'none',
          }}
        >
          {hearts[i % hearts.length]}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0)    rotate(0deg);  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-105vh) rotate(25deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

/* ── Main export ── */
const Effects = () => {
  useFadeIn();
  return (
    <>
      <ScrollProgress />
      <CursorSparkle />
      <FloatingHearts />
      <ScrollToTop />
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
};

export default Effects;
