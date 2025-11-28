import { useInView } from '../hooks/useInView';

type BreatherType = 'quote' | 'stat' | 'question' | 'transition';
type Temperature = 'cold' | 'cool' | 'neutral' | 'warm' | 'hot';

interface BreatherProps {
  type: BreatherType;
  temperature?: Temperature;
  content: string;
  author?: string;
  label?: string;
}

export function Breather({ type, temperature = 'cold', content, author, label }: BreatherProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  const accentColors = {
    cold: 'text-cyan-400',
    cool: 'text-blue-400',
    neutral: 'text-slate-400',
    warm: 'text-purple-400',
    hot: 'text-orange-400'
  };

  const glowColors = {
    cold: 'text-cyan-400/10',
    cool: 'text-blue-400/10',
    neutral: 'text-slate-400/10',
    warm: 'text-purple-400/10',
    hot: 'text-orange-400/10'
  };

  if (type === 'quote') {
    return (
      <div
        ref={ref}
        className="min-h-[60vh] flex items-center justify-center px-6 py-20"
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className={`block text-6xl md:text-8xl ${accentColors[temperature]} opacity-30 font-serif mb-4`}>
            "
          </span>
          <blockquote className="text-2xl md:text-4xl lg:text-5xl text-white/95 font-display font-light leading-tight tracking-tight">
            {content}
          </blockquote>
          {author && (
            <cite className={`block mt-8 text-sm font-mono uppercase tracking-[0.2em] ${accentColors[temperature]} not-italic`}>
              — {author}
            </cite>
          )}
        </div>
      </div>
    );
  }

  if (type === 'stat') {
    return (
      <div
        ref={ref}
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 relative"
      >
        <div className={`text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Glow behind */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
            <span className={`giant-number text-[8rem] md:text-[12rem] lg:text-[16rem] ${glowColors[temperature]} blur-xl`}>
              {content}
            </span>
          </div>

          {/* Main number */}
          <span className={`giant-number text-[8rem] md:text-[12rem] lg:text-[16rem] relative z-10
            text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5`}>
            {content}
          </span>

          {label && (
            <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
              {label}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (type === 'question') {
    return (
      <div
        ref={ref}
        className="min-h-[50vh] flex items-center justify-center px-6 py-20"
      >
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className={`text-2xl md:text-3xl lg:text-4xl font-display font-light ${accentColors[temperature]}`}>
            {content}
          </p>
        </div>
      </div>
    );
  }

  // transition type
  return (
    <div
      ref={ref}
      className="min-h-[40vh] flex items-center justify-center px-6 py-16"
    >
      <div className={`text-center transition-all duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className={`w-px h-20 mx-auto mb-8 bg-gradient-to-b from-transparent via-slate-600 to-transparent`} />
        <p className="text-lg md:text-xl text-slate-500 font-light italic max-w-xl mx-auto">
          {content}
        </p>
        <div className={`w-px h-20 mx-auto mt-8 bg-gradient-to-b from-transparent via-slate-600 to-transparent`} />
      </div>
    </div>
  );
}
