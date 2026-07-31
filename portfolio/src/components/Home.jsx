const itSymbols = ['</>', '{ }', '=>', '[ ]', '( )', 'const', 'import', 'git', 'npm', 'function', '#', '01', 'async', 'return', '&&'];

const Home = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">

    {/* ── Gradient mesh background ── */}
    <div className="absolute inset-0 -z-10"
         style={{ background: 'linear-gradient(135deg, #fff5f9 0%, #fdf8f4 40%, #f0f9ff 100%)' }} />

    {/* Blob 1 */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full -z-10 animate-[drift_10s_ease-in-out_infinite]"
         style={{ background: 'radial-gradient(circle, rgba(249,168,212,0.35) 0%, transparent 70%)' }} />
    {/* Blob 2 */}
    <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full -z-10 animate-[drift_12s_ease-in-out_infinite_2s]"
         style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.3) 0%, transparent 70%)' }} />
    {/* Blob 3 */}
    <div className="absolute -bottom-20 left-1/3 w-[360px] h-[360px] rounded-full -z-10 animate-[drift_9s_ease-in-out_infinite_4s]"
         style={{ background: 'radial-gradient(circle, rgba(167,243,208,0.2) 0%, transparent 70%)' }} />

    {/* IT floating symbols */}
    {itSymbols.map((s, i) => (
      <span key={i}
        className="absolute font-mono font-bold pointer-events-none select-none"
        style={{
          top:      `${8  + (i * 6)  % 84}%`,
          left:     `${2  + (i * 13) % 93}%`,
          fontSize: `${0.7 + (i % 3) * 0.13}rem`,
          color:    i % 3 === 0 ? 'rgba(236,72,153,0.12)' : i % 3 === 1 ? 'rgba(139,111,71,0.1)' : 'rgba(139,92,246,0.1)',
          animationName: 'drift',
          animationDuration: `${5 + (i % 5)}s`,
          animationDelay:    `${(i * 0.35) % 3}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        }}
      >
        {s}
      </span>
    ))}

    {/* ── Main content ── */}
    <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 w-full py-16">

      {/* Photo */}
      <div className="flex-shrink-0 relative animate-[float_4s_ease-in-out_infinite]">
        {/* outer glow ring */}
        <div className="absolute -inset-3 rounded-[2.5rem_2.5rem_4.5rem_2.5rem] animate-[glow_2.5s_ease-in-out_infinite]"
             style={{ background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #fbcfe8)', opacity: 0.5, filter: 'blur(12px)' }} />
        <img
          src="/assets/Profile.jpg"
          alt="Nattharika Boonsong"
          className="relative w-64 h-80 object-cover object-top rounded-[2rem_2rem_4rem_2rem] hover:scale-105 hover:rotate-1 transition-all duration-500"
          style={{
            border: '3px solid rgba(249,168,212,0.8)',
            boxShadow: '0 0 0 6px rgba(249,168,212,0.2), 0 20px 60px rgba(249,168,212,0.4)',
          }}
        />
        {/* floating badge */}
        <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-pink-100
                        text-xs font-bold text-pink-400 animate-[wiggle_3s_ease-in-out_infinite]">
          ✿ IT Student
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 self-center md:self-start
                        bg-white/70 backdrop-blur-sm border border-pink-100 rounded-full
                        px-4 py-1.5 text-xs font-bold text-pink-400 tracking-widest uppercase shadow-sm">
          <span className="animate-[glow_1.5s_ease-in-out_infinite]">✦</span>
          Hello, I'm
          <span className="animate-[glow_1.5s_ease-in-out_infinite_0.5s]">✦</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ background: 'linear-gradient(135deg, #1c1917 30%, #92400e 70%, #be185d 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Nattharika<br />Boonsong
        </h1>

        <p className="text-stone-400 text-lg font-light">
          You can call me{' '}
          <span className="font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #be185d, #7c3aed)' }}>
            Aum
          </span>{' '}🌸
        </p>

        <p className="text-stone-500 text-sm leading-relaxed max-w-md">
          I'm a student in the Faculty of Information Technology and Innovation
          at Bangkok University. Welcome to my personal portfolio — a space where
          I share my projects, skills, and experiences that I've gathered along the way.
          I hope you enjoy exploring my work!
        </p>

        <div className="flex gap-3 mt-2 justify-center md:justify-start flex-wrap">
          <a href="#projects"
             className="relative overflow-hidden text-white text-sm font-bold px-7 py-3 rounded-full
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-300 active:scale-95"
             style={{ background: 'linear-gradient(135deg, #be185d, #7c3aed)', boxShadow: '0 4px 20px rgba(190,24,93,0.4)' }}>
            ✦ View My Work
          </a>
          <a href="#contact"
             className="bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-500 text-sm font-bold px-7 py-3 rounded-full
                        hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 active:scale-95">
            Contact Me ♡
          </a>
        </div>

        {/* stats row */}
        <div className="flex gap-6 mt-3 justify-center md:justify-start">
          {[
            { num: '21', label: 'Age' },
            { num: '6+', label: 'Projects' },
            { num: 'BU', label: 'University' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-extrabold text-lg text-stone-800">{s.num}</p>
              <p className="text-xs text-stone-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* bottom wave */}
    <div className="absolute bottom-0 left-0 right-0 h-16 -z-10"
         style={{ background: 'linear-gradient(to top, #fdf8f4, transparent)' }} />
  </section>
);

export default Home;
