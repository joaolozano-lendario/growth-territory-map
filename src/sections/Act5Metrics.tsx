import { useState } from 'react';
import { Section } from '../components/Section';
import { useInView } from '../hooks/useInView';
import { northStarExamples, growthLoops, funnelAARRR } from '../data/content';

function NorthStarSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [...new Set(northStarExamples.map(e => e.category))];

  const filteredExamples = activeCategory
    ? northStarExamples.filter(e => e.category === activeCategory)
    : northStarExamples;

  return (
    <div ref={ref} className={`mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
        North Star Metric
      </h3>
      <p className="text-slate-400 mb-8 max-w-2xl">
        Uma métrica que governa todas as outras. O indicador único que captura
        o valor que você entrega aos usuários.
      </p>

      {/* Hierarchy visualization */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {[
          { level: 1, name: 'North Star', count: '1', color: '#f97316', desc: 'A única métrica que importa' },
          { level: 2, name: 'Primary', count: '3-5', color: '#10b981', desc: 'Métricas de saúde do negócio' },
          { level: 3, name: 'Secondary', count: '10-20', color: '#06b6d4', desc: 'Métricas de operação diária' },
          { level: 4, name: 'Vanity', count: '∞', color: '#64748b', desc: 'Ignore completamente' },
        ].map((item, i) => (
          <div
            key={item.name}
            className={`p-4 rounded-xl border transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: `${i * 100}ms`,
              borderColor: `${item.color}50`,
              backgroundColor: `${item.color}10`,
            }}
          >
            <div className="font-mono text-xs text-slate-500 mb-2">Nível {item.level}</div>
            <div className="font-display font-semibold text-white">{item.name}</div>
            <div className="font-mono text-2xl font-bold mt-2" style={{ color: item.color }}>
              {item.count}
            </div>
            <div className="text-xs text-slate-500 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Examples by category */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
        <h4 className="font-display font-semibold text-white mb-4">Exemplos por Tipo de Produto</h4>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              !activeCategory
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Examples grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredExamples.map((example) => (
            <div
              key={example.company}
              className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-cyan-500/30 transition-all"
            >
              <div className="font-display font-semibold text-white">{example.company}</div>
              <div className="font-mono text-cyan-400 text-sm mt-1">{example.metric}</div>
              <div className="text-xs text-slate-500 mt-2">{example.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AARRRMetrics() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
        Métricas por Estágio (AARRR)
      </h3>

      <div className="space-y-4">
        {funnelAARRR.stages.map((stage, index) => (
          <div
            key={stage.name}
            className={`p-6 rounded-xl border transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{
              transitionDelay: `${index * 100}ms`,
              borderColor: `${stage.color}40`,
              backgroundColor: `${stage.color}05`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-4xl font-bold"
                  style={{ color: stage.color }}
                >
                  {stage.letter}
                </span>
                <div>
                  <div className="font-display font-semibold text-white text-lg">
                    {stage.name}
                  </div>
                  <div className="text-slate-400 text-sm">{stage.question}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {stage.metrics.map(metric => (
                  <span
                    key={metric}
                    className="font-mono text-sm px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: `${stage.color}20`,
                      color: stage.color,
                    }}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowthLoopsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [activeLoop, setActiveLoop] = useState<number | null>(null);

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
        Growth Loops
      </h3>
      <p className="text-slate-400 mb-8 max-w-2xl">
        Loops são sistemas que se auto-alimentam. Diferente de funis lineares,
        loops criam crescimento composto.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {growthLoops.map((loop, index) => (
          <div
            key={loop.name}
            className={`relative p-5 rounded-xl border cursor-pointer transition-all duration-500 ${
              activeLoop === index ? 'scale-105 z-10' : ''
            } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: `${index * 80}ms`,
              borderColor: activeLoop === index ? loop.color : 'rgba(71, 85, 105, 0.5)',
              backgroundColor: activeLoop === index ? `${loop.color}15` : 'rgba(30, 41, 59, 0.3)',
            }}
            onMouseEnter={() => setActiveLoop(index)}
            onMouseLeave={() => setActiveLoop(null)}
          >
            {/* Loop icon */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-xl"
              style={{ backgroundColor: `${loop.color}20` }}
            >
              ♾️
            </div>

            <h4 className="font-display font-semibold text-white mb-2">
              {loop.name}
            </h4>

            <p className="text-sm text-slate-400 mb-3">
              {loop.description}
            </p>

            {/* Expanded content */}
            {activeLoop === index && (
              <div className="space-y-2 animate-fade-in">
                <div className="text-xs text-slate-500">{loop.example}</div>
                <div
                  className="font-mono text-xs px-2 py-1 rounded inline-block"
                  style={{ backgroundColor: `${loop.color}20`, color: loop.color }}
                >
                  {loop.metric}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Loop vs Funnel */}
      <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-display font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-slate-500">📊</span> Funil (Linear)
            </h4>
            <p className="text-sm text-slate-400">
              100 visitantes → 10 leads → 1 cliente.
              <br />
              <span className="text-slate-500">Para crescer: mais visitantes no topo.</span>
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-emerald-400">♾️</span> Loop (Composto)
            </h4>
            <p className="text-sm text-slate-400">
              1 cliente → indica 2 → que indicam 4.
              <br />
              <span className="text-emerald-400">Crescimento exponencial sem custo proporcional.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Act5Metrics() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();

  return (
    <Section id="act5" temperature="cold" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Act header */}
        <div ref={titleRef} className={`mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-cyan-400 text-sm tracking-wider">ATO 05</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
            As Métricas
          </h2>
          <p className="text-slate-400 text-xl mt-4 max-w-2xl">
            O painel de controle. North Star, AARRR, Growth Loops —
            os números que realmente importam.
          </p>
        </div>

        {/* North Star */}
        <NorthStarSection />

        {/* AARRR Metrics */}
        <AARRRMetrics />

        {/* Growth Loops */}
        <GrowthLoopsSection />
      </div>
    </Section>
  );
}
