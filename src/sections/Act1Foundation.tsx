import { useState } from 'react';
import { Section } from '../components/Section';
import { Breather } from '../components/Breather';
import { useInView } from '../hooks/useInView';
import { eightComponents } from '../data/content';

function ComponentCard({ component, index, isVisible }: { component: typeof eightComponents[0]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5',
    emerald: 'border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/5',
    purple: 'border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5',
    blue: 'border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/5',
    orange: 'border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-500/5',
    yellow: 'border-yellow-500/30 hover:border-yellow-500/60 hover:bg-yellow-500/5',
    pink: 'border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/5',
    slate: 'border-slate-500/30 hover:border-slate-500/60 hover:bg-slate-500/5',
  };

  const numberColor: Record<string, string> = {
    cyan: 'text-cyan-500',
    emerald: 'text-emerald-500',
    purple: 'text-purple-500',
    blue: 'text-blue-500',
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    pink: 'text-pink-500',
    slate: 'text-slate-500',
  };

  return (
    <div
      className={`relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 cursor-pointer card-hover
        ${colorMap[component.color]}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number indicator */}
      <span className={`absolute top-3 right-3 font-mono text-xs ${numberColor[component.color]}`}>
        {String(component.id).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="text-4xl mb-4">{component.icon}</div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-white mb-2">
        {component.title}
      </h3>

      {/* Description */}
      <p className={`text-sm transition-all duration-300 ${isHovered ? 'text-slate-300' : 'text-slate-500'}`}>
        {component.description}
      </p>
    </div>
  );
}

export function Act1Foundation() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();
  const { ref: definitionRef, isInView: definitionVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridVisible } = useInView<HTMLDivElement>();

  return (
    <>
      <Section id="act1" temperature="cool" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Act header */}
          <div ref={titleRef} className={`mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="font-mono text-cyan-500 text-sm tracking-wider">ATO 01</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
              A Fundação
            </h2>
            <p className="text-slate-400 text-xl mt-4 max-w-2xl">
              Antes de escalar, você precisa entender o terreno.
              Growth Hacking não é truque — é metodologia.
            </p>
          </div>

          {/* Definition */}
          <div ref={definitionRef} className={`mb-24 transition-all duration-1000 ${definitionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
                O que é Growth Hacking?
              </h3>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                <span className="text-cyan-400 font-semibold">Growth Hacking</span> é a interseção de
                <span className="text-emerald-400"> marketing</span>,
                <span className="text-purple-400"> produto</span> e
                <span className="text-orange-400"> dados</span> — uma metodologia focada em encontrar
                as alavancas de crescimento através de <span className="text-white font-medium">experimentação rápida</span> e
                <span className="text-white font-medium"> decisões baseadas em métricas</span>.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🔬</div>
                  <div className="font-display font-semibold text-white">Experimentação</div>
                  <div className="text-sm text-slate-500">Hipóteses testáveis</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-display font-semibold text-white">Métricas</div>
                  <div className="text-sm text-slate-500">Dados, não achismo</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-display font-semibold text-white">Escala</div>
                  <div className="text-sm text-slate-500">Crescimento exponencial</div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Components Grid */}
          <div ref={gridRef}>
            <h3 className={`font-display text-2xl md:text-3xl font-semibold text-white mb-8 transition-all duration-1000 ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
              Os 8 Componentes do Growth
            </h3>
            <p className={`text-slate-400 mb-12 max-w-2xl transition-all duration-1000 delay-100 ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
              Cada peça é essencial. Juntas, formam o sistema completo de crescimento.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {eightComponents.map((component, index) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  index={index}
                  isVisible={gridVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Breather before Act 2 */}
      <Section id="breather1" temperature="cool">
        <Breather
          type="quote"
          temperature="cool"
          content="What gets measured, gets managed."
          author="Peter Drucker"
        />
      </Section>

      <Section id="transition1" temperature="cool">
        <Breather
          type="transition"
          temperature="cool"
          content="Mas como esses 8 componentes se conectam na prática? A resposta está nos funis."
        />
      </Section>
    </>
  );
}
