import { useState, useEffect } from 'react';
import { Section } from '../components/Section';

export function Prologue() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 800),    // Show question
      setTimeout(() => setStage(2), 2500),   // Show 90%
      setTimeout(() => setStage(3), 4000),   // Show 10%
      setTimeout(() => setStage(4), 5500),   // Show MAPA
      setTimeout(() => setStage(5), 7000),   // Show title
      setTimeout(() => setStage(6), 8500),   // Show scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Section id="prologue" temperature="cold" fullHeight className="flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/15 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Opening question */}
        <div className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light">
            Das startups que nascem hoje...
          </p>
        </div>

        {/* The stats reveal */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          {/* 90% */}
          <div className={`transition-all duration-1000 ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="giant-number text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-red-400/80 to-red-600/40">
              90%
            </span>
            <p className="text-slate-500 mt-2 text-sm uppercase tracking-wider">morrem</p>
          </div>

          {/* Divider */}
          <div className={`hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-slate-600 to-transparent transition-opacity duration-1000 ${stage >= 3 ? 'opacity-100' : 'opacity-0'}`} />

          {/* 10% */}
          <div className={`transition-all duration-1000 delay-300 ${stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <span className="giant-number text-7xl md:text-9xl gradient-text">
              10%
            </span>
            <p className="text-slate-500 mt-2 text-sm uppercase tracking-wider">sobrevivem</p>
          </div>
        </div>

        {/* The punchline */}
        <div className={`transition-all duration-1000 ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-300 text-xl md:text-2xl mb-4">
            A diferença não é mais recursos.
          </p>
          <p className="text-slate-300 text-xl md:text-2xl mb-8">
            É ter um <span className="text-cyan-400 font-semibold">MAPA</span> melhor.
          </p>
        </div>

        {/* Title reveal */}
        <div className={`transition-all duration-1200 ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mt-16 mb-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">GROWTH</span>
              <span className="text-cyan-400">HACKING</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mt-4 font-light tracking-wide">
              MAPA EPISTÊMICO TERRITORIAL
            </p>
          </div>

          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            O guia definitivo para navegar o território do crescimento.
            <br />
            De fundamentos a operação. Tudo em um só lugar.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${stage >= 6 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll para explorar</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-bounce" />
          </div>
        </div>
      </div>
    </Section>
  );
}
