import { useState } from 'react';
import { Section } from '../components/Section';
import { Breather } from '../components/Breather';
import { useInView } from '../hooks/useInView';
import { funnelAARRR, awarenessStages, plgFunnel } from '../data/content';

function AARRRFunnel() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div ref={ref} className="mb-32">
      <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          {funnelAARRR.title}
        </h3>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          {funnelAARRR.subtitle}
        </p>

        {/* Visual funnel */}
        <div className="relative max-w-4xl mx-auto">
          {funnelAARRR.stages.map((stage, index) => {
            const width = 100 - (index * 15);
            const isActive = activeStage === index;

            return (
              <div
                key={stage.name}
                className={`relative mb-2 transition-all duration-500 cursor-pointer ${isInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveStage(index)}
                onMouseLeave={() => setActiveStage(null)}
              >
                {/* Funnel segment */}
                <div
                  className={`mx-auto rounded-lg transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                  style={{
                    width: `${width}%`,
                    backgroundColor: `${stage.color}20`,
                    borderLeft: `4px solid ${stage.color}`,
                    borderRight: `4px solid ${stage.color}`,
                  }}
                >
                  <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-display text-3xl md:text-4xl font-bold"
                        style={{ color: stage.color }}
                      >
                        {stage.letter}
                      </span>
                      <div>
                        <div className="font-display font-semibold text-white text-lg">
                          {stage.name}
                        </div>
                        <div className="text-slate-400 text-sm">{stage.portuguese}</div>
                      </div>
                    </div>

                    <div className={`text-right transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                      <div className="text-slate-300 text-sm mb-1">{stage.question}</div>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {stage.metrics.slice(0, 3).map(metric => (
                          <span key={metric} className="font-mono text-xs px-2 py-1 rounded bg-slate-800/50 text-slate-400">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gap indicator */}
                {index < funnelAARRR.stages.length - 1 && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-red-500/20 border border-red-500/30 rounded px-3 py-1">
                      <span className="font-mono text-xs text-red-400">
                        {stage.gap} drop
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Insight box */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-display font-semibold text-white mb-2">Por que AARRR é poderoso?</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="text-white">Diagnóstico preciso:</span> Identifica ONDE está o problema</li>
                <li>• <span className="text-white">Priorização clara:</span> Foca no maior gargalo primeiro</li>
                <li>• <span className="text-white">Linguagem comum:</span> Time inteiro fala a mesma língua</li>
                <li>• <span className="text-white">Métricas definidas:</span> Cada etapa tem KPIs específicos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AwarenessFunnel() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-32">
      <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Funil de Consciência
        </h3>
        <p className="text-slate-400 text-lg mb-4 max-w-2xl">
          Os 5 estágios de Eugene Schwartz — de inconsciente a pronto para comprar
        </p>
        <p className="text-cyan-400 text-sm mb-12 max-w-2xl font-medium">
          ⚠️ Regra de Ouro: Não venda para quem não está pronto
        </p>

        {/* Horizontal awareness stages */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {awarenessStages.map((stage, index) => (
              <div
                key={stage.name}
                className={`relative flex-shrink-0 w-64 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Stage card */}
                <div
                  className="h-full rounded-xl border p-6 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${stage.color}10`,
                    borderColor: `${stage.color}40`,
                  }}
                >
                  {/* Level indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500">Nível {stage.level}</span>
                    <span
                      className="font-display text-2xl font-bold"
                      style={{ color: stage.color }}
                    >
                      {stage.percentage}
                    </span>
                  </div>

                  {/* Stage name */}
                  <h4 className="font-display font-semibold text-white text-lg mb-1">
                    {stage.name}
                  </h4>
                  <p className="text-slate-400 text-sm mb-4">{stage.portuguese}</p>

                  {/* Description */}
                  <p className="text-slate-500 text-sm mb-4">{stage.description}</p>

                  {/* Recommended iscas */}
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Iscas ideais:</p>
                    <div className="flex flex-wrap gap-1">
                      {stage.iscas.map(isca => (
                        <span
                          key={isca}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: `${stage.color}20`,
                            color: stage.color,
                          }}
                        >
                          {isca}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < awarenessStages.length - 1 && (
                  <div className="absolute top-1/2 -right-4 text-slate-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PLGFunnel() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          {plgFunnel.title}
        </h3>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          {plgFunnel.subtitle}
        </p>

        {/* PLG stages as a flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plgFunnel.stages.map((stage, index) => (
            <div
              key={stage.name}
              className={`relative bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 transition-all duration-500 hover:border-emerald-500/50 hover:bg-emerald-500/5 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-slate-900">{index + 1}</span>
              </div>

              <h4 className="font-display text-xl font-semibold text-white mb-2 mt-2">
                {stage.name}
              </h4>
              <p className="text-slate-400 text-sm mb-4">{stage.description}</p>

              <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                <span className="text-xs text-slate-500">{stage.metric}</span>
                <span className="font-mono text-sm text-emerald-400">{stage.target}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hook Model callout */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/30 rounded-xl p-6">
          <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
            <span>🪝</span> Hook Model (Nir Eyal)
          </h4>
          <div className="grid sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="text-emerald-400 font-semibold mb-1">Trigger</div>
              <div className="text-xs text-slate-500">Gatilho interno/externo</div>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="text-emerald-400 font-semibold mb-1">Action</div>
              <div className="text-xs text-slate-500">Ação mínima</div>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="text-emerald-400 font-semibold mb-1">Reward</div>
              <div className="text-xs text-slate-500">Recompensa variável</div>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg">
              <div className="text-emerald-400 font-semibold mb-1">Investment</div>
              <div className="text-xs text-slate-500">Investimento futuro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Act2Funnels() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();

  return (
    <>
      <Section id="act2" temperature="neutral" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Act header */}
          <div ref={titleRef} className={`mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="font-mono text-slate-500 text-sm tracking-wider">ATO 02</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
              Os Três Funis
            </h2>
            <p className="text-slate-400 text-xl mt-4 max-w-2xl">
              Três lentes para enxergar o mesmo território.
              Cada uma revela algo diferente sobre seu crescimento.
            </p>
          </div>

          {/* AARRR Funnel */}
          <AARRRFunnel />

          {/* Awareness Funnel */}
          <AwarenessFunnel />

          {/* PLG Funnel */}
          <PLGFunnel />
        </div>
      </Section>

      {/* Breather */}
      <Section id="breather2" temperature="neutral">
        <Breather
          type="stat"
          temperature="neutral"
          content="95%"
          label="dos visitantes não convertem no primeiro contato. A jornada é longa — seu funil precisa acompanhar."
        />
      </Section>

      <Section id="transition2" temperature="neutral">
        <Breather
          type="transition"
          temperature="neutral"
          content="Os funis mostram ONDE as pessoas estão. Mas o que você oferece em cada etapa? É hora de conhecer o Arsenal."
        />
      </Section>
    </>
  );
}
