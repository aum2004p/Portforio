const symbols = [
  { text: '</>',      top: '10%', left: '5%',   duration: '6s',  delay: '0s',   size: '1rem'   },
  { text: '{ }',      top: '20%', left: '88%',  duration: '8s',  delay: '1s',   size: '1.1rem' },
  { text: '( )',      top: '55%', left: '92%',  duration: '7s',  delay: '2s',   size: '0.9rem' },
  { text: '=>',       top: '75%', left: '6%',   duration: '9s',  delay: '0.5s', size: '1rem'   },
  { text: '[ ]',      top: '40%', left: '3%',   duration: '6.5s',delay: '1.5s', size: '0.85rem'},
  { text: '#',        top: '85%', left: '80%',  duration: '5s',  delay: '2.5s', size: '1.3rem' },
  { text: '01',       top: '15%', left: '75%',  duration: '10s', delay: '0.2s', size: '0.8rem' },
  { text: '/*  */',   top: '65%', left: '85%',  duration: '7.5s',delay: '3s',   size: '0.8rem' },
  { text: 'import',   top: '30%', left: '90%',  duration: '8.5s',delay: '1.2s', size: '0.78rem'},
  { text: 'const',    top: '90%', left: '15%',  duration: '6s',  delay: '2s',   size: '0.82rem'},
  { text: 'function', top: '8%',  left: '40%',  duration: '9s',  delay: '0.8s', size: '0.78rem'},
  { text: '< />',     top: '50%', left: '1%',   duration: '7s',  delay: '3.5s', size: '0.9rem' },
  { text: '0x1F',     top: '78%', left: '50%',  duration: '11s', delay: '1s',   size: '0.75rem'},
  { text: 'npm',      top: '95%', left: '60%',  duration: '6.5s',delay: '4s',   size: '0.8rem' },
  { text: 'git',      top: '35%', left: '97%',  duration: '8s',  delay: '0.3s', size: '0.82rem'},
];

const BgSymbols = () => (
  <div className="bg-symbols" aria-hidden="true">
    {symbols.map((s, i) => (
      <span
        key={i}
        className="bg-symbol"
        style={{
          top: s.top,
          left: s.left,
          animationDuration: s.duration,
          animationDelay: s.delay,
          fontSize: s.size,
        }}
      >
        {s.text}
      </span>
    ))}
  </div>
);

export default BgSymbols;
