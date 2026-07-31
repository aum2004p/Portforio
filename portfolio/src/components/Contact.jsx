import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('https://formspree.io/f/xgogqjjg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #fff5f9 0%, #fdf8f4 100%)' }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full -z-10"
           style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-1">Say hi!</p>
          <h2 className="text-3xl font-extrabold text-stone-800">Contact</h2>
          <div className="mt-2 h-1 w-12 rounded-full" style={{ background: 'linear-gradient(90deg, #be185d, #c4b5fd)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-12 items-start">
          {/* Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-5"
                 style={{ boxShadow: '0 4px 20px rgba(249,168,212,0.12)' }}>
              <h3 className="font-bold text-stone-800 mb-1">Let's Connect 🌸</h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Feel free to reach out for collaborations, questions, or just a chat!
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {[
                { icon: '📧', label: 'Email',    value: 'nattharika010947@gmail.com', href: 'mailto:your@email.com' },
                { icon: '💼', label: 'LinkedIn', value: 'Nattharika Boonsong', href: 'https://www.linkedin.com/in/nattharika-boonsong-5b2042426?trk=contact-info' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href}
                     className="flex items-center gap-3 bg-white/80 border border-stone-100 rounded-xl px-4 py-3
                                hover:border-pink-200 hover:shadow-md hover:shadow-pink-50 hover:-translate-x-1
                                transition-all duration-200 group">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-[0.65rem] text-stone-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs text-stone-600 group-hover:text-pink-500 transition-colors">{item.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate
                className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 flex flex-col gap-4"
                style={{ boxShadow: '0 4px 30px rgba(249,168,212,0.12)' }}>
            {[
              { id: 'name',  label: 'Your Name',  type: 'text',  placeholder: 'Aum ✿' },
              { id: 'email', label: 'Your Email', type: 'email', placeholder: 'hello@email.com' },
            ].map(f => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-xs font-bold text-stone-600 tracking-wide">
                  {f.label}
                </label>
                <input id={f.id} type={f.type} name={f.id}
                       value={form[f.id]} onChange={handleChange}
                       placeholder={f.placeholder} required
                       className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-700
                                  placeholder:text-stone-300 bg-white/90
                                  focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100
                                  focus:-translate-y-0.5 transition-all" />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-stone-600 tracking-wide">Message</label>
              <textarea id="message" name="message" value={form.message}
                        onChange={handleChange} placeholder="Your message here... 💌"
                        rows={4} required
                        className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-700
                                   placeholder:text-stone-300 bg-white/90 resize-none
                                   focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100
                                   focus:-translate-y-0.5 transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <button type="submit" disabled={status === 'sending'}
                      className="self-start text-white text-sm font-bold px-8 py-3 rounded-full
                                 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 active:scale-95
                                 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #be185d, #7c3aed)', boxShadow: '0 4px 20px rgba(190,24,93,0.35)' }}>
                {status === 'sending' ? 'Sending... ⏳' : 'Send Message ✦'}
              </button>
              {status === 'success' && (
                <p className="text-xs font-semibold text-emerald-500">✅ Message sent! I'll get back to you soon 🌸</p>
              )}
              {status === 'error' && (
                <p className="text-xs font-semibold text-red-400">❌ Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
