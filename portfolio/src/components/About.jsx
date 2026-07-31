const About = () => (
  <section id="about" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
    {/* bg */}
    <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #fdf8f4 0%, #fff5f9 100%)' }} />
    <div className="absolute top-0 right-0 w-72 h-72 rounded-full -z-10"
         style={{ background: 'radial-gradient(circle, rgba(249,168,212,0.2) 0%, transparent 70%)' }} />

    <div className="max-w-5xl mx-auto px-6">
      {/* title */}
      <div className="mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">Get to know me</p>
        <h2 className="text-3xl font-extrabold text-stone-800">About Me</h2>
        <div className="mt-2 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
      </div>

      <div className="flex flex-col md:flex-row gap-14 items-start">
        {/* Photo */}
        <div className="flex-shrink-0 relative animate-[float_5s_ease-in-out_infinite]">
          <div className="absolute -inset-3 rounded-[2rem_2rem_3.5rem_2rem]"
               style={{ background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd)', opacity: 0.4, filter: 'blur(14px)' }} />
          <img
            src="/assets/Abm.jpg"
            alt="Nattharika Boonsong"
            className="relative w-52 h-64 object-cover object-top rounded-[1.5rem_1.5rem_3rem_1.5rem] hover:scale-105 transition-all duration-500"
            style={{
              border: '3px solid rgba(249,168,212,0.8)',
              boxShadow: '0 0 0 6px rgba(249,168,212,0.2), 0 16px 48px rgba(249,168,212,0.4)',
            }}
          />
          <div className="absolute -top-3 -left-3 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-purple-100
                          text-xs font-bold text-purple-400 animate-[wiggle_4s_ease-in-out_infinite]">
            🎓 Bangkok Univ.
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 flex-1">
          {/* glass card bio */}
          <div className="rounded-2xl p-5 border border-pink-100/60"
               style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)' }}>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              Hi! I'm <strong className="text-stone-800">Nattharika Boonsong</strong>, but you can call me{' '}
              <strong className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#be185d,#7c3aed)' }}>Aum</strong>.
              I'm a student in the Faculty of Information Technology and Innovation at Bangkok University,
              with a love for creativity and problem-solving.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              I enjoy working on projects that blend design and technology. Whether it's building
              web applications or exploring new ideas, I'm always eager to learn and grow.
            </p>
          </div>

          {/* Info chips */}
          <ul className="grid grid-cols-1 gap-2 mt-1">
            {[
              { icon: '🎂', label: 'Age',       value: '21' },
              { icon: '🎓', label: 'Education', value: 'Information Technology and Innovation, Bangkok University' },
              { icon: '📍', label: 'Location',  value: 'Pathum Thani, Thailand' },
              { icon: '💼', label: 'Available', value: 'Internships' },
            ].map(item => (
              <li key={item.label}
                  className="flex items-center gap-3 bg-white/80 border border-stone-100 rounded-xl px-4 py-2.5
                             hover:border-pink-200 hover:shadow-md hover:shadow-pink-50 hover:-translate-x-1
                             transition-all duration-200 cursor-default text-sm">
                <span className="text-base">{item.icon}</span>
                <strong className="text-stone-600 min-w-[75px] text-xs uppercase tracking-wide">{item.label}</strong>
                <span className="text-stone-500 text-xs">{item.value}</span>
              </li>
            ))}
          </ul>

          <a href="#contact"
             className="self-start mt-2 text-white text-sm font-bold px-7 py-3 rounded-full
                        hover:-translate-y-1 hover:shadow-xl transition-all duration-300 active:scale-95"
             style={{ background: 'linear-gradient(135deg, #be185d, #7c3aed)', boxShadow: '0 4px 20px rgba(190,24,93,0.35)' }}>
            Get In Touch ♡
          </a>

          {/* Education */}
          <div className="mt-2">
            <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-3">Education</p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: '🏫',
                  school: 'Ake Ayo Thaya School',
                  degree: 'High School',
                  gpa: 'GPA 3.53',
                  year: '2023',
                },
                {
                  icon: '🎓',
                  school: 'Bangkok University',
                  degree: 'Faculty of IT & Innovation · Computer Science',
                  gpa: 'GPA 3.18',
                  year: '2023 – Present',
                },
              ].map(e => (
                <div key={e.school}
                     className="flex items-start gap-3 bg-white/80 border border-stone-100 rounded-2xl px-4 py-3
                                hover:border-pink-200 hover:shadow-md hover:shadow-pink-50 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                       style={{ background: 'linear-gradient(135deg, #fff0f6, #f3f0ff)' }}>
                    {e.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-stone-800 text-xs font-bold">{e.school}</p>
                    <p className="text-stone-400 text-xs">{e.degree}</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full text-pink-500 bg-pink-50 border border-pink-100">
                        {e.gpa}
                      </span>
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full text-purple-500 bg-purple-50 border border-purple-100">
                        {e.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
