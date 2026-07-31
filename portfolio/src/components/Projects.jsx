import { useState } from 'react';

const projects = [
  {
    id: 1, emoji: '🖥️', gradient: 'from-pink-100 to-rose-50',
    title: 'Project One',
    description: 'เป็นโปรเจ็ค Mobile App เกี่ยวกับวางแพลนเที่ยว บันทึกรูปไดอารี่ และโดยมีฟังก์ชันที่ให้ AI ต่างๆ จัดกระเป๋าให้ เช็คลิส สิ่งของต้องห้ามแต่ละประเทศ และมีประเมิณความเสี่ยงจากการไปเที่ยวในแต่ละเดือนของแต่ละประเทศนั้นๆ',
    tags: ['C#', '.NET MAUI'], github: '#', demo: '#',
    video: '/src/assets/Port_Trip2Plan.mp4',
  },
  {
    id: 2, emoji: '⚙️', gradient: 'from-violet-100 to-purple-50',
    title: 'Project Two',
    description: 'เป็นโปรเจ็คที่ให้ AI วิเคราะห์คามคิดเห็นของลูกค้าที่ส่งเข้ามา AI จะสามารถวิเคราะห์และบอกได้ว่าข้อความนั้นเป็นอะไร เชิงไหน เช่น Positive , Nagative จากนั้น AI ก็จะร่างข้อความในการตอบกลับให้ และสามารถดูประวัติความคิดเห็นจากคนที่ส่งเข้ามาได้',
    tags: ['JavaScript', 'React', 'CSS', 'Vite'], github: '#', demo: 'https://opne-api.vercel.app/?classId=851292ed-db00-4aa9-842d-a9349cb9cb4d&assignmentId=f4424703-b510-4291-9ada-95af9faa6479&submissionId=3519aab4-8a2e-bb45-0891-f0f19add5944',
    coverVideo: '/src/assets/Pro2.mp4',
  },
  {
    id: 3, emoji: '🐍', gradient: 'from-amber-100 to-orange-50',
    title: 'Project Three',
    description: 'เป็นโปรเจ็คเกี่ยวกับให้ AI ทำนายจากการวาดเลขไทย เลข 51-55 หรือเอารูปที่เขียนเลขไทยมาให้ AI ทำนาย เช่นเขียนเลข 54 AI ก็จะทำนายและบอกว่าเลขนั้นคือเลขอะไร ความตรงเลขนั้นกี่ % และสามารถเพิ่มรูปเพื่อ Train หรือ Test ได้',
    tags: ['Python', 'Flask'], github: '#', demo: '#',
    coverVideo: '/src/assets/Pro3.mp4',
    video: '/src/assets/Pro3.mp4',
  },
  {
    id: 4, emoji: '🎨', gradient: 'from-sky-100 to-blue-50',
    title: 'Project Four',
    description: 'เป็นโปรเจ็คที่ออกแบบแอปพลิเคชันขายเสื้อผ้าหรือเครื่องประดับด้วย Figma',
    tags: ['Figma'], github: '#', demo: 'https://www.figma.com/proto/kntpGBk8fQNlY2eANQdxn1/Project-IT?node-id=126-2599&starting-point-node-id=126%3A2599',
    coverVideo: '/src/assets/Pro4.mp4',
  },
  {
    id: 5, emoji: '💡', gradient: 'from-green-100 to-emerald-50',
    title: 'Project Five',
    description: 'เป็นโปรเจ็ค IOT ที่ต่อด้วยเว็บจำลองและเขียนเว็บขึ้นมาเชื่อมกันเพื่อดูสถานะที่จอดรถว่าช่องนั้นว่างไหม',
    tags: ['C++','IOT','Firebase','ESP32'], github: '#', demo: 'https://wokwi.com/projects/463262167369228289?classId=e2d41282-2c04-470b-b979-e7499894987c&assignmentId=7f7c8f27-c875-4266-a05f-24b34a404d62&submissionId=445631ba-8d8f-c5cb-a4b3-44c723bd4fe6',
    demo2: 'http://smart-slot-parking.atwebpages.com/index.html',
    coverVideo: '/src/assets/Pro_ESP.mp4',
  },
  {
    id: 6, emoji: '🌟', gradient: 'from-fuchsia-100 to-pink-50',
    title: 'Project Six',
    description: 'เป็นโปรเจ็คที่ออกแบบหน้าจอร้านเสื้อผ้า โดยมีฟังก์ชันต่างๆ เช่น ถ่ายรูปแล้วให้ AI วิเคราะห์ว่าแต่ละคนควรใส่เสื้อผ้าแนวไหน สีโทนไหน และสามารถเอาชุดในร้านใส่จำลองเหมือนใส่จริงๆ',
    tags: ['Figma'], github: '#', demo: '#',
    coverVideo: '/src/assets/Pro5.mp4',
    video: '/src/assets/Pro5.mp4',
  },
];

const Projects = () => {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section id="projects" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #fdf8f4 0%, #fff5f9 100%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">What I've built</p>
          <h2 className="text-3xl font-extrabold text-stone-800">Projects</h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.id}
                 className="group bg-white/90 border border-stone-100 rounded-3xl overflow-hidden
                            hover:-translate-y-3 hover:rotate-[0.5deg] transition-all duration-300"
                 style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', animationDelay: `${i * 0.1}s` }}>
              {/* thumbnail */}
              <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl
                              group-hover:scale-110 transition-transform duration-500 origin-center overflow-hidden`}>
                {p.video || p.coverVideo ? (
                  <video
                    src={p.video || p.coverVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  p.emoji
                )}
              </div>

              {/* body */}
              <div className="p-5">
                <h3 className="font-bold text-stone-800 mb-1.5 text-sm">{p.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag}
                          className="text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full
                                     bg-gradient-to-r from-pink-50 to-purple-50 text-pink-500
                                     border border-pink-100 hover:scale-105 transition-transform">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {/* Live Demo — เปิด modal ถ้ามีวิดีโอ */}
                  {p.video ? (
                    <button
                      onClick={() => setModalVideo(p.video)}
                      className="w-full text-center text-xs font-bold py-3 rounded-2xl text-white
                                 hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300
                                 flex items-center justify-center gap-2"
                      style={{ background: 'linear-gradient(135deg, #f472b6, #be185d, #7c3aed)',
                               boxShadow: '0 4px 20px rgba(190,24,93,0.35)' }}>
                      <span className="text-sm">▶</span> Live Demo
                    </button>
                  ) : (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                       className="w-full text-center text-xs font-bold py-3 rounded-2xl text-white
                                  hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300
                                  flex items-center justify-center gap-2"
                       style={{ background: 'linear-gradient(135deg, #f472b6, #be185d, #7c3aed)',
                                boxShadow: '0 4px 20px rgba(190,24,93,0.35)' }}>
                      <span className="text-sm">▶</span> Live Demo
                    </a>
                  )}
                  {/* demo2 — ปุ่มที่ 2 ถ้ามี */}
                  {p.demo2 && (
                    <a href={p.demo2} target="_blank" rel="noreferrer"
                       className="w-full text-center text-xs font-bold py-3 rounded-2xl text-white
                                  hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300
                                  flex items-center justify-center gap-2"
                       style={{ background: 'linear-gradient(135deg, #34d399, #059669)',
                                boxShadow: '0 4px 20px rgba(5,150,105,0.3)' }}>
                      <span className="text-sm">🌐</span> Web Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Video Modal ── */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ width: '100%', maxWidth: '480px', maxHeight: '80vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white
                         flex items-center justify-center text-sm hover:bg-black/70 transition-colors">
              ✕
            </button>
            <video
              src={modalVideo}
              className="w-full"
              style={{ maxHeight: '75vh', display: 'block' }}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
