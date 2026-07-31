const activities = [
  { id: 1, year: '2568', title: 'Cybersecurity and IT Empowering', role: 'Participant', description: 'เข้าร่วมงาน Cybersecurity and IT Empowering ในวันที่ 9 พฤษภาคม 2568', image: '/assets/Ac1.png' },
  { id: 2, year: '2569', title: 'IT Empowering Day in the Era of AI', role: 'Participant', description: 'เข้าร่วมงาน IT Empowering Day in the Era of AI ในวันที่ 21 พฤษภาคม 2569', image: '/assets/Ac2.png' },
  { id: 3, year: '2569', title: 'BU Cyber Fortress Challenge & Career Expo', role: 'Participant', description: 'เข้าร่วมงาน BU Cyber Fortress Challenge & Career Expo ในวันที่ 10 กุมภาพันธ์ 2569', image: '/assets/Ac3.jpg' },
];

const Activities = () => (
  <section id="activities" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #fff5f9 0%, #fdf8f4 100%)' }} />
    <div className="absolute top-20 right-0 w-64 h-64 rounded-full -z-10"
         style={{ background: 'radial-gradient(circle, rgba(249,168,212,0.15) 0%, transparent 70%)' }} />

    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">My journey</p>
        <h2 className="text-3xl font-extrabold text-stone-800">Activities</h2>
        <div className="mt-2 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
      </div>

      <div className="relative pl-8">
        {/* timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full"
             style={{ background: 'linear-gradient(to bottom, #be185d, #c4b5fd, #e2e8f0)' }} />

        {activities.map((a, i) => (
          <div key={a.id} className="relative mb-8 last:mb-0 group">
            {/* dot */}
            <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full border-2 border-white
                            group-hover:scale-125 transition-transform duration-200"
                 style={{ background: 'linear-gradient(135deg, #be185d, #7c3aed)', boxShadow: '0 0 12px rgba(190,24,93,0.4)' }} />

            <p className="text-[0.7rem] font-bold tracking-widest uppercase text-pink-400 mb-1.5">{a.year}</p>

            <div className="bg-white/90 border border-stone-100 rounded-2xl p-5
                            group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-pink-50
                            transition-all duration-300"
                 style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <h3 className="font-bold text-stone-800 text-sm mb-1.5">{a.title}</h3>
              <span className="inline-block text-[0.7rem] font-semibold px-3 py-0.5 rounded-full text-pink-500
                               bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
                {a.role}
              </span>
              <p className="text-stone-400 text-xs leading-relaxed mt-2">{a.description}</p>
              {a.image && (
                <img src={a.image} alt={a.title}
                     className="mt-3 w-40 rounded-xl object-cover hover:scale-[1.02] transition-transform duration-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Activities;
