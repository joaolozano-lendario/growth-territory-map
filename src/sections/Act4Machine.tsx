import { useState } from 'react';
import { Section } from '../components/Section';
import { Breather } from '../components/Breather';
import { useInView } from '../hooks/useInView';
import { funnelMachine, experimentProcess } from '../data/content';

function MotorCard({
  role,
  index,
  isVisible,
  isActive,
  onClick
}: {
  role: typeof funnelMachine.roles[0];
  index: number;
  isVisible: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
        isActive
          ? 'scale-105 z-10'
          : 'hover:scale-102'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        backgroundColor: isActive ? `${role.color}15` : 'rgba(30, 41, 59, 0.3)',
        borderColor: isActive ? role.color : 'rgba(71, 85, 105, 0.5)',
      }}
      onClick={onClick}
    >
      {/* Role badge */}
      <div
        className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-mono font-bold"
        style={{ backgroundColor: role.color, color: '#0f172a' }}
      >
        {role.name}
      </div>

      {/* Owner */}
      <div className="mt-4 mb-4">
        <span className="text-slate-500 text-sm">Responsável:</span>
        <span className="text-white font-semibold ml-2">{role.owner}</span>
      </div>

      {/* Title */}
      <h4 className="font-display text-xl font-semibold text-white mb-2">
        {role.title}
      </h4>

      {/* Flow */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-slate-500">{role.input}</span>
        <span style={{ color: role.color }}>→</span>
        <span className="text-white font-medium">{role.output}</span>
      </div>

      {/* North Star */}
      <div
        className="p-3 rounded-lg mb-4"
        style={{ backgroundColor: `${role.color}10` }}
      >
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">North Star</div>
        <div className="font-mono text-sm" style={{ color: role.color }}>
          {role.northStar}
        </div>
      </div>

      {/* Expanded content */}
      {isActive && (
        <div className="space-y-4 animate-fade-in">
          {/* Metrics */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Métricas</div>
            <div className="flex flex-wrap gap-2">
              {role.metrics.map(metric => (
                <span
                  key={metric}
                  className="text-xs px-2 py-1 rounded bg-slate-800/50 text-slate-300"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Responsabilidades</div>
            <ul className="space-y-1">
              {role.responsibilities.map((resp, i) => (
                <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                  <span style={{ color: role.color }}>✓</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function ScoringVisualizer() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [score, setScore] = useState(55);

  const getStatus = (s: number) => {
    if (s >= 86) return { label: 'SQL', color: '#f97316', action: 'Handoff imediato para vendas' };
    if (s >= 71) return { label: 'MQL', color: '#10b981', action: 'Alta prioridade + notifica vendas' };
    if (s >= 41) return { label: 'WARM', color: '#eab308', action: 'Nurturing ativo' };
    return { label: 'COLD', color: '#64748b', action: 'Low-touch nurturing' };
  };

  const status = getStatus(score);

  return (
    <div ref={ref} className={`mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
        Sistema de Lead Scoring
      </h3>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Score composition */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
          <h4 className="font-display font-semibold text-white mb-4">Composição do Score</h4>

          <div className="space-y-6">
            {/* Fit Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400">Fit Score</span>
                <span className="font-mono text-cyan-400">0-50 pts</span>
              </div>
              <div className="space-y-2 pl-4 border-l-2 border-cyan-500/30">
                {funnelMachine.scoring.fit.components.map((comp, i) => (
                  <div key={i} className="text-sm text-slate-500">{comp}</div>
                ))}
              </div>
            </div>

            {/* Interest Score */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400">Interest Score</span>
                <span className="font-mono text-orange-400">0-50 pts</span>
              </div>
              <div className="space-y-2 pl-4 border-l-2 border-orange-500/30">
                {funnelMachine.scoring.interest.components.map((comp, i) => (
                  <div key={i} className="text-sm text-slate-500">{comp}</div>
                ))}
              </div>
            </div>

            {/* Decay */}
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-red-400">⚠️</span>
                <span className="text-sm text-red-400">Decay: {funnelMachine.scoring.decay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive score slider */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
          <h4 className="font-display font-semibold text-white mb-4">Simule um Score</h4>

          {/* Score display */}
          <div className="text-center mb-6">
            <div
              className="font-display text-7xl font-bold transition-colors duration-300"
              style={{ color: status.color }}
            >
              {score}
            </div>
            <div
              className="text-lg font-semibold mt-2 transition-colors duration-300"
              style={{ color: status.color }}
            >
              {status.label}
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #64748b 0%, #64748b 40%, #eab308 40%, #eab308 70%, #10b981 70%, #10b981 85%, #f97316 85%, #f97316 100%)`
            }}
          />

          {/* Thresholds */}
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>0</span>
            <span>40</span>
            <span>70</span>
            <span>85</span>
            <span>100</span>
          </div>

          {/* Action */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: `${status.color}15` }}>
            <div className="text-sm text-slate-400 mb-1">Ação recomendada:</div>
            <div className="font-medium" style={{ color: status.color }}>
              {status.action}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperimentEngine() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
        Máquina de Experimentação
      </h3>
      <p className="text-slate-400 mb-8 max-w-2xl">
        O processo de 9 passos que transforma hipóteses em crescimento validado.
      </p>

      <div className="relative">
        {/* Process steps */}
        <div className="grid sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {experimentProcess.map((step, index) => (
            <div
              key={step.step}
              className={`relative bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 transition-all duration-500 hover:border-orange-500/50 hover:bg-orange-500/5 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Step number */}
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center mb-3">
                <span className="font-mono text-sm text-orange-400">{step.step}</span>
              </div>

              <h5 className="font-display font-semibold text-white text-sm mb-1">
                {step.name}
              </h5>
              <p className="text-xs text-slate-500">
                {step.description}
              </p>

              {/* Connector arrow */}
              {index < experimentProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 text-slate-600 text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Win rate callout */}
        <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl inline-block">
          <span className="text-orange-400 font-mono text-sm">
            Win rate esperado: 15-30% dos experimentos geram lift significativo
          </span>
        </div>
      </div>
    </div>
  );
}

export function Act4Machine() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();
  const { ref: motorsRef, isInView: motorsVisible } = useInView<HTMLDivElement>();
  const [activeMotor, setActiveMotor] = useState<number | null>(null);

  return (
    <>
      <Section id="act4" temperature="hot" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Act header */}
          <div ref={titleRef} className={`mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="font-mono text-orange-400 text-sm tracking-wider">ATO 04</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
              A Máquina
            </h2>
            <p className="text-slate-400 text-xl mt-4 max-w-2xl">
              O blueprint operacional. TOFU, MOFU, BOFU — três motores,
              um sistema integrado de crescimento.
            </p>
          </div>

          {/* The 3 Motors */}
          <div ref={motorsRef} className="mb-20">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-8">
              Os 3 Motores do Funil
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {funnelMachine.roles.map((role, index) => (
                <MotorCard
                  key={role.name}
                  role={role}
                  index={index}
                  isVisible={motorsVisible}
                  isActive={activeMotor === index}
                  onClick={() => setActiveMotor(activeMotor === index ? null : index)}
                />
              ))}
            </div>

            {/* Handoff flow */}
            <div className="mt-8 flex items-center justify-center gap-4 text-slate-500">
              <span className="font-mono text-sm">Audiência</span>
              <span className="text-cyan-400">→</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm">TOFU</span>
              <span className="text-cyan-400">→</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm">MOFU</span>
              <span className="text-emerald-400">→</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-sm">BOFU</span>
              <span className="text-orange-400">→</span>
              <span className="font-mono text-sm">💰 Cliente</span>
            </div>
          </div>

          {/* Scoring System */}
          <ScoringVisualizer />

          {/* Experiment Engine */}
          <ExperimentEngine />
        </div>
      </Section>

      {/* Breather */}
      <Section id="breather4" temperature="hot">
        <Breather
          type="quote"
          temperature="hot"
          content="O scoring elimina o achismo. Dados, não feeling."
          author="Growth Playbook"
        />
      </Section>

      <Section id="transition4" temperature="hot">
        <Breather
          type="transition"
          temperature="hot"
          content="A máquina precisa de combustível: métricas. Vamos ao painel de controle."
        />
      </Section>
    </>
  );
}
