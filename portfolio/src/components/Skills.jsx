import { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    gradient: 'from-pink-400 to-rose-400',
    glow: 'rgba(251,113,133,0.3)',
    bg: 'from-pink-50 to-rose-50',
    skills: [
      { name: 'HTML',       level: 80, icon: '🌐' },
      { name: 'CSS',        level: 75, icon: '🎨' },
      { name: 'JavaScript', level: 70, icon: '⚡' },
      { name: 'React',      level: 65, icon: '⚛️' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    gradient: 'from-violet-400 to-purple-500',
    glow: 'rgba(167,139,250,0.3)',
    bg: 'from-violet-50 to-purple-50',
    skills: [
      { name: 'C#',      level: 65, icon: '🔷' },
      { name: 'Node.js', level: 50, icon: '🟢' },
      { name: 'Python',  level: 60, icon: '🐍' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    gradient: 'from-amber-400 to-orange-400',
    glow: 'rgba(251,191,36,0.3)',
    bg: 'from-amber-50 to-orange-50',
    skills: [
      { name: 'SQLite',  level: 65, icon: '🗃️' },
      { name: 'MySQL',   level: 60, icon: '🐬' },
      { name: 'MongoDB', level: 55, icon: '🍃' },
    ],
  },
  {
    category: 'Tools & Software',
    icon: '💻',
    gradient: 'from-teal-400 to-cyan-400',
    glow: 'rgba(45,212,191,0.3)',
    bg: 'from-teal-50 to-cyan-50',
    skills: [
      { name: 'Figma',               level: 85, icon: '✏️' },
      { name: 'Visual Studio Code',  level: 85, icon: '💙' },
      { name: 'Visual Studio 2022/2026',  level: 80, icon: '🟪' },
      { name: 'Google Colab',        level: 75, icon: '🔶' },
      { name: 'Arduino IDE',         level: 65, icon: '🤖' },
      { name: 'Power BI',            level: 55, icon: '📊' },
      { name: 'Vite',                level: 70, icon: '⚡' },
      { name: 'GitHub',              level: 70, icon: '🐙' },
    ],
  },
  {
    category: 'IoT',
    icon: '📡',
    gradient: 'from-green-400 to-emerald-500',
    glow: 'rgba(52,211,153,0.3)',
    bg: 'from-green-50 to-emerald-50',
    skills: [
      { name: 'ESP32',    level: 60, icon: '🔌' },
      { name: 'Firebase', level: 55, icon: '🔥' },
    ],
  },
];

/* ── animated bar hook ── */
const useInView = (ref) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
};

/* ── single skill row ── */
const SkillBar = ({ skill, gradient, delay }) => {
  const ref = useRef(null);
  const visible = useInView(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} className="mb-4 last:mb-0 group/bar"
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
          <span className="text-sm">{skill.icon}</span>
          {skill.name}
        </span>
        {/* animated percentage badge */}
        <span className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full transition-all duration-300
                          ${hovered ? 'text-white scale-110' : 'text-stone-400 bg-transparent'}`}
              style={hovered ? { background: `linear-gradient(135deg, ${gradient.replace('from-','').split(' ')[0]}, ${gradient.split('to-')[1]})` } : {}}>
          {skill.level}%
        </span>
      </div>

      {/* track */}
      <div className="relative h-2 bg-stone-100 rounded-full overflow-hidden">
        {/* fill */}
        <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${gradient}
                         transition-all duration-1000 ease-out`}
             style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${delay}ms` }} />
        {/* shimmer */}
        {visible && (
          <div className="absolute inset-y-0 rounded-full"
               style={{
                 left: 0,
                 width: `${skill.level}%`,
                 background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                 backgroundSize: '200% 100%',
                 animation: `shimmer 2s ease-in-out ${delay + 900}ms 1`,
                 transitionDelay: `${delay}ms`,
               }} />
        )}
        {/* tip dot */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white
                         shadow-md transition-all duration-1000 ease-out`}
             style={{
               left: visible ? `calc(${skill.level}% - 6px)` : '0%',
               background: `linear-gradient(135deg, #be185d, #7c3aed)`,
               transitionDelay: `${delay}ms`,
               boxShadow: hovered ? '0 0 8px rgba(190,24,93,0.6)' : undefined,
             }} />
      </div>
    </div>
  );
};

/* ── category card ── */
const SkillCard = ({ cat, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group relative cursor-default h-full"
         style={{ perspective: '1000px' }}
         onMouseEnter={() => setFlipped(true)}
         onMouseLeave={() => setFlipped(false)}>

      {/* card */}
      <div className={`relative bg-white/90 border border-white rounded-3xl overflow-hidden h-full
                       transition-all duration-500`}
           style={{
             boxShadow: flipped
               ? `0 20px 60px ${cat.glow}, 0 4px 20px rgba(0,0,0,0.08)`
               : '0 4px 20px rgba(0,0,0,0.06)',
             transform: flipped ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
           }}>

        {/* gradient top accent */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${cat.gradient}`} />

        {/* shimmer on hover */}
        <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none
                         ${flipped ? 'opacity-100' : 'opacity-0'}`}
             style={{ background: `linear-gradient(135deg, ${cat.glow.replace('0.3','0.06')}, transparent 60%)` }} />

        <div className="p-6">
          {/* header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${cat.bg} flex items-center justify-center
                              text-base shadow-sm transition-transform duration-300 ${flipped ? 'rotate-12 scale-110' : ''}`}>
                {cat.icon}
              </div>
              <h3 className="text-xs font-bold text-stone-500 tracking-widest uppercase">{cat.category}</h3>
            </div>
            {/* skill count badge */}
            <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${cat.gradient} text-white`}>
              {cat.skills.length} skills
            </span>
          </div>

          {/* bars */}
          {cat.skills.map((skill, si) => (
            <SkillBar key={skill.name} skill={skill} gradient={cat.gradient} delay={si * 120} />
          ))}

          {/* avg bar */}
          <div className="mt-5 pt-4 border-t border-stone-100">
            <div className="flex justify-between text-[0.65rem] text-stone-400 font-medium mb-1">
              <span>Average</span>
              <span>{Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%</span>
            </div>
            <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full bg-gradient-to-r ${cat.gradient} opacity-40`}
                   style={{ width: `${Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
    {/* bg */}
    <div className="absolute inset-0 -z-10"
         style={{ background: 'linear-gradient(180deg, #fff5f9 0%, #fdf8f4 50%, #f5f3ff 100%)' }} />
    <div className="absolute top-10 left-0 w-96 h-96 rounded-full -z-10"
         style={{ background: 'radial-gradient(circle, rgba(249,168,212,0.12) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full -z-10"
         style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.15) 0%, transparent 70%)' }} />

    {/* floating code symbols */}
    {['{ }', '</>', '=>', '[]', '#', '&&'].map((s, i) => (
      <span key={i} className="absolute font-mono font-bold pointer-events-none select-none"
            style={{
              top:  `${10 + i * 14}%`,
              right: `${2 + (i % 3) * 3}%`,
              fontSize: '0.75rem',
              color: i % 2 === 0 ? 'rgba(190,24,93,0.08)' : 'rgba(124,58,237,0.08)',
              animation: `drift ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}>
        {s}
      </span>
    ))}

    <div className="max-w-5xl mx-auto px-6">
      {/* title */}
      <div className="mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">What I can do</p>
        <h2 className="text-3xl font-extrabold text-stone-800">Skills</h2>
        <div className="mt-2 h-1 w-12 rounded-full"
             style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.category} cat={cat} index={i} />
        ))}
      </div>

      {/* bottom legend */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {[
          { label: 'Beginner',     range: '< 50%',  color: '#94a3b8' },
          { label: 'Intermediate', range: '50–70%', color: '#a78bfa' },
          { label: 'Advanced',     range: '70–85%', color: '#be185d' },
          { label: 'Expert',       range: '85%+',   color: '#7c3aed' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-2 text-xs text-stone-400">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
            <span className="font-medium">{l.label}</span>
            <span className="text-stone-300">{l.range}</span>
          </div>
        ))}
      </div>

      {/* ── Soft Skills ── */}
      <div className="mt-16">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">Beyond the code</p>
        <h3 className="text-2xl font-extrabold text-stone-800 mb-2">Soft Skills</h3>
        <div className="mt-2 h-1 w-12 rounded-full mb-10"
             style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '😊', title: 'อัธยาศัยดี & มีมารยาท',       desc: 'เป็นคนมีมารยาทและให้เกียรติผู้อื่นเสมอ' },
            { icon: '🤝', title: 'ชอบช่วยเหลือผู้อื่น',          desc: 'ยินดีช่วยเหลือเพื่อนร่วมทีมและคนรอบข้างอยู่เสมอ ไม่เลือกว่างานนั้นจะง่ายหรือยาก' },
            { icon: '🔧', title: 'ชอบแก้ปัญหา',                  desc: 'ชอบแก้ปัญหาแม้บางครั้งอาจจะแก้ไม่ได้ดีแต่ก็พยายามแก้ได้' },
            { icon: '🌟', title: 'เข้ากับคนง่าย',                desc: 'ปรับตัวเข้ากับคนและสภาพแวดล้อมได้ดี ทำงานเป็นทีมได้อย่างราบรื่น' },
            { icon: '🎯', title: 'ซื่อสัตย์',                    desc: 'ทำงานด้วยความซื่อสัตย์ และรับผิดชอบต่อสิ่งที่ตัวเองทำ' },
            { icon: '⏰', title: 'ตรงต่อเวลา',                   desc: 'ให้ความสำคัญกับเวลาและส่งงานตรงตามกำหนดเสมอ' },
          ].map((s, i) => (
            <div key={s.title}
                 className="group relative bg-white/80 border border-stone-100 rounded-2xl p-5 overflow-hidden
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300"
                 style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              {/* gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-70"
                   style={{ background: `linear-gradient(90deg, #f472b6, #be185d, #7c3aed)` }} />
              {/* shimmer hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: 'linear-gradient(135deg, rgba(249,168,212,0.07), rgba(196,181,253,0.07))' }} />

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0
                                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                     style={{ background: 'linear-gradient(135deg, #fff0f6, #f3f0ff)' }}>
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-sm mb-1">{s.title}</h4>
                  <p className="text-stone-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* shimmer keyframe injected */}
    <style>{`
      @keyframes shimmer {
        0%   { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes drift {
        0%,100% { transform: translateY(0) translateX(0); }
        50%      { transform: translateY(-14px) translateX(6px); }
      }
    `}</style>
  </section>
);

export default Skills;
