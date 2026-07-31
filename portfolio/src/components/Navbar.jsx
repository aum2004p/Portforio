import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',         href: '#home'         },
  { label: 'About Me',     href: '#about'        },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Projects',     href: '#projects'     },
  { label: 'Activities',   href: '#activities'   },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact'      },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                     ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm shadow-pink-100/50' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="font-extrabold text-sm tracking-widest uppercase"
              style={{ background: 'linear-gradient(90deg, #be185d, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Aum ✿
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href}
                 className="text-stone-500 text-xs font-semibold hover:text-pink-500 transition-colors relative
                            after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[2px] after:rounded-full
                            after:bg-gradient-to-r after:from-pink-400 after:to-purple-400
                            after:scale-x-0 after:transition-transform hover:after:scale-x-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-pink-400 text-xl font-bold"
                onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 py-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}
                   className="text-stone-500 text-sm font-semibold hover:text-pink-500 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
