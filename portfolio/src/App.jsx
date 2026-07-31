import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Effects from './components/Effects';
import './App.css';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#fdfaf7' }}>
      <Effects />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Certificates />
        <Contact />
      </main>
      <footer className="relative text-center py-10 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #fff5f9, #fdf8f4)' }}>
        <div className="absolute inset-0 -z-10"
             style={{ backgroundImage: 'radial-gradient(rgba(249,168,212,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <p className="text-transparent bg-clip-text font-bold tracking-[0.4em] text-sm mb-1 animate-pulse"
           style={{ backgroundImage: 'linear-gradient(90deg, #be185d, #7c3aed, #be185d)' }}>
          ✦  ✿  ✦
        </p>
        <p className="text-stone-400 text-xs">© 2025 Nattharika Boonsong. Made with ♡</p>
      </footer>
    </div>
  );
}

export default App;
