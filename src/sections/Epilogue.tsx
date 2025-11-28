import { Section } from '../components/Section';
import { useInView } from '../hooks/useInView';

export function Epilogue() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();
  const { ref: checklistRef, isInView: checklistVisible } = useInView<HTMLDivElement>();
  const { ref: pathsRef, isInView: pathsVisible } = useInView<HTMLDivElement>();
  const { ref: closingRef, isInView: closingVisible } = useInView<HTMLDivElement>();

  const checklist = [
    { id: 1, text: 'Defina sua North Star Metric', category: 'Fundação' },
    { id: 2, text: 'Mapeie seu funil AARRR atual', category: 'Diagnóstico' },
    { id: 3, text: 'Identifique o maior gap de conversão', category: 'Diagnóstico' },
    { id: 4, text: 'Escolha UMA isca para cada estágio', category: 'Arsenal' },
    { id: 5, text: 'Configure lead scoring básico', category: 'Máquina' },
    { id: 6, text: 'Crie sua primeira hipótese de growth', category: 'Experimento' },
    { id: 7, text: 'Defina métricas de sucesso do experimento', category: 'Experimento' },
    { id: 8, text: 'Execute, meça, aprenda, repita', category: 'Operação' },
  ];

  const paths = [
    {
      stage: 'Começando do Zero',
      icon: '🌱',
      color: '#10b981',
      actions: [
        'Foque em Acquisition primeiro',
        'Crie 1 lead magnet simples (Checklist)',
        'Configure tracking básico (GA4)',
        'Priorize organic antes de paid'
      ]
    },
    {
      stage: 'Tem Tráfego, Sem Conversão',
      icon: '🔥',
      color: '#f97316',
      actions: [
        'Mapeie onde visitantes abandonam',
        'Crie isca interativa (Quiz, Calculadora)',
        'Otimize landing page (copy + CTA)',
        'Teste headlines A/B'
      ]
    },
    {
      stage: 'Tem Leads, Sem Vendas',
      icon: '💎',
      color: '#8b5cf6',
      actions: [
        'Implemente lead scoring',
        'Crie sequence de nurturing',
        'Defina SLA de handoff MOFU→BOFU',
        'Mapeie objeções recorrentes'
      ]
    },
    {
      stage: 'Vendendo, Quer Escalar',
      icon: '🚀',
      color: '#06b6d4',
      actions: [
        'Calcule LTV:CAC precisamente',
        'Identifique growth loop potencial',
        'Construa referral program',
        'Automatize máquina de experimentos'
      ]
    }
  ];

  return (
    <Section id="epilogue" temperature="cold" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Epilogue header */}
        <div ref={titleRef} className={`mb-20 text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-mono text-cyan-400 text-sm tracking-wider">EPÍLOGO</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
            Seu Próximo Passo
          </h2>
          <p className="text-slate-400 text-xl mt-4 max-w-2xl mx-auto">
            O mapa está nas suas mãos. Agora é hora de explorar o território.
          </p>
        </div>

        {/* Action Checklist */}
        <div ref={checklistRef} className={`mb-20 transition-all duration-1000 ${checklistVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
            Checklist de Ação Imediata
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {checklist.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-500 ${checklistVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-sm text-cyan-400">{item.id}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{item.text}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paths based on stage */}
        <div ref={pathsRef} className={`mb-20 transition-all duration-1000 ${pathsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            Por Onde Começar?
          </h3>
          <p className="text-slate-400 mb-8">
            Depende de onde você está. Encontre seu estágio:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {paths.map((path, index) => (
              <div
                key={path.stage}
                className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-102 ${pathsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderColor: `${path.color}40`,
                  backgroundColor: `${path.color}05`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{path.icon}</span>
                  <h4 className="font-display text-xl font-semibold text-white">
                    {path.stage}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {path.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span style={{ color: path.color }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div ref={closingRef} className={`text-center transition-all duration-1000 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Final quote */}
          <div className="max-w-3xl mx-auto mb-16">
            <span className="block text-6xl text-cyan-400/30 font-serif mb-4">"</span>
            <blockquote className="text-2xl md:text-3xl text-white/95 font-display font-light leading-tight">
              O mapa não é o território, mas sem mapa você está perdido.
              <br />
              <span className="text-cyan-400">Agora você tem o mapa.</span>
            </blockquote>
          </div>

          {/* Signature */}
          <div className="pt-12 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">
              Criado com obsessão por métricas e amor pelo crescimento.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-600 text-xs">
              <span>MAPA EPISTÊMICO TERRITORIAL</span>
              <span>•</span>
              <span>GROWTH HACKING</span>
              <span>•</span>
              <span>v1.0</span>
            </div>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-12 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
          >
            ↑ Voltar ao início
          </button>
        </div>
      </div>
    </Section>
  );
}
