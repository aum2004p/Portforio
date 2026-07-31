import { useState } from 'react';

const certificates = [
  { id: 1,  image: '/assets/Cer1.png',  title: 'Certificate 1',  issuer: '', date: '', credentialUrl: '#' },
  { id: 2,  image: '/assets/Cer2.png',  title: 'Certificate 2',  issuer: '', date: '', credentialUrl: '#' },
  { id: 3,  image: '/assets/Cer3.png',  title: 'Certificate 3',  issuer: '', date: '', credentialUrl: '#' },
  { id: 4,  image: '/assets/Cer4.png',  title: 'Certificate 4',  issuer: '', date: '', credentialUrl: '#' },
  { id: 5,  image: '/assets/Cer5.png',  title: 'Certificate 5',  issuer: '', date: '', credentialUrl: '#' },
  { id: 6,  image: '/assets/Cer6.png',  title: 'Certificate 6',  issuer: '', date: '', credentialUrl: '#' },
  { id: 7,  image: '/assets/Cer7.png',  title: 'Certificate 7',  issuer: '', date: '', credentialUrl: '#' },
  { id: 8,  image: '/assets/Cer8.png',  title: 'Certificate 8',  issuer: '', date: '', credentialUrl: '#' },
  { id: 9,  image: '/assets/Cer9.png',  title: 'Certificate 9',  issuer: '', date: '', credentialUrl: '#' },
  { id: 10, image: '/assets/Cer10.png', title: 'Certificate 10', issuer: '', date: '', credentialUrl: '#' },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #fdf8f4 0%, #fff5f9 100%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">My achievements</p>
          <h2 className="text-3xl font-extrabold text-stone-800">Certificates</h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <div key={cert.id}
                 onClick={() => setSelected(cert)}
                 className="group relative bg-white/90 border border-stone-100 rounded-2xl overflow-hidden
                            hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 cursor-pointer"
                 style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              {/* shimmer bg on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                   style={{ background: 'linear-gradient(135deg, rgba(249,168,212,0.08), rgba(196,181,253,0.08))' }} />

              {/* รูป certificate */}
              <div className="w-full overflow-hidden bg-stone-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black/40 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  🔍 Click to view
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white
                         flex items-center justify-center text-base hover:bg-black/70 transition-colors">
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
