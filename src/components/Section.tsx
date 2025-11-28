import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Temperature = 'cold' | 'cool' | 'neutral' | 'warm' | 'hot';

interface SectionProps {
  id: string;
  temperature: Temperature;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, temperature, children, className = '', fullHeight = false }: SectionProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const bgClasses = {
    cold: 'section-cold',
    cool: 'section-cool',
    neutral: 'section-neutral',
    warm: 'section-warm',
    hot: 'section-hot'
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${fullHeight ? 'min-h-screen' : ''} ${bgClasses[temperature]} ${className}`}
    >
      {/* Atmospheric glow based on temperature */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {temperature === 'cold' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full" />
        )}
        {temperature === 'cool' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full" />
        )}
        {temperature === 'neutral' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-500/5 blur-[120px] rounded-full" />
        )}
        {temperature === 'warm' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full" />
        )}
        {temperature === 'hot' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full" />
        )}
      </div>

      {/* Content with animation trigger */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </section>
  );
}
