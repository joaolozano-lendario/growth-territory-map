import { useState } from 'react';
import { Section } from '../components/Section';
import { Breather } from '../components/Breather';
import { useInView } from '../hooks/useInView';
import { leadMagnets } from '../data/content';

type FilterType = 'all' | 'high-conversion' | 'low-effort';

function LeadMagnetCard({
  type,
  categoryColor
}: {
  type: { name: string; effort: string; conversion: string };
  categoryColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const effortColors: Record<string, string> = {
    'Baixo': 'text-emerald-400 bg-emerald-400/10',
    'Médio': 'text-yellow-400 bg-yellow-400/10',
    'Alto': 'text-orange-400 bg-orange-400/10',
  };

  return (
    <div
      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
        isHovered ? 'bg-slate-800/50 border-slate-600' : 'bg-slate-800/20 border-slate-700/50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h5 className="font-display font-medium text-white">{type.name}</h5>
        <span className={`text-xs px-2 py-0.5 rounded ${effortColors[type.effort]}`}>
          {type.effort}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="h-2 rounded-full flex-1 bg-slate-700/50 overflow-hidden"
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: isHovered ? type.conversion.split('-')[1] : type.conversion.split('-')[0],
              backgroundColor: categoryColor,
            }}
          />
        </div>
        <span className="font-mono text-xs text-slate-400 w-16 text-right">
          {type.conversion}
        </span>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  index,
  isVisible
}: {
  category: typeof leadMagnets.categories[0];
  index: number;
  isVisible: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl border backdrop-blur-sm transition-all duration-500 overflow-hidden ${
        category.highlight
          ? 'border-emerald-500/50 bg-emerald-500/5'
          : 'border-slate-700/50 bg-slate-800/30'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h4 className="font-display text-xl font-semibold text-white flex items-center gap-2">
                {category.name}
                {category.highlight && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                    Alta Conversão
                  </span>
                )}
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                {category.types.length} tipos disponíveis
              </p>
            </div>
          </div>
          <div className="text-right">
            <div
              className="font-mono text-2xl font-bold"
              style={{ color: category.color }}
            >
              {category.conversion}
            </div>
            <div className="text-xs text-slate-500">conversão média</div>
          </div>
        </div>

        {/* Expand indicator */}
        <div className="flex items-center justify-center mt-4 text-slate-500">
          <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </div>

      {/* Expanded content */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 space-y-3">
          {category.types.map((type) => (
            <LeadMagnetCard
              key={type.name}
              type={type}
              categoryColor={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Act3Arsenal() {
  const { ref: titleRef, isInView: titleVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, isInView: gridVisible } = useInView<HTMLDivElement>();
  const { ref: anatomyRef, isInView: anatomyVisible } = useInView<HTMLDivElement>();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredCategories = leadMagnets.categories.filter(cat => {
    if (filter === 'all') return true;
    if (filter === 'high-conversion') return cat.highlight;
    if (filter === 'low-effort') return cat.types.some(t => t.effort === 'Baixo');
    return true;
  });

  return (
    <>
      <Section id="act3" temperature="warm" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Act header */}
          <div ref={titleRef} className={`mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="font-mono text-purple-400 text-sm tracking-wider">ATO 03</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">
              O Arsenal
            </h2>
            <p className="text-slate-400 text-xl mt-4 max-w-2xl">
              19 tipos de iscas em 5 categorias estratégicas.
              Cada uma serve um propósito específico no funil.
            </p>
          </div>

          {/* Anatomy of perfect lead magnet */}
          <div ref={anatomyRef} className={`mb-20 transition-all duration-1000 ${anatomyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Anatomia da Isca Perfeita
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🎯', title: 'Específica', desc: 'Resolve UM problema claro' },
                  { icon: '⚡', title: 'Valor Imediato', desc: 'Resultado rápido e tangível' },
                  { icon: '🍰', title: 'Fácil de Consumir', desc: 'Baixa fricção de uso' },
                  { icon: '💎', title: 'Alto Valor Percebido', desc: 'Vale mais que o "preço" (email)' },
                  { icon: '🔗', title: 'Relevante ao Produto', desc: 'Conecta com sua oferta principal' },
                  { icon: '✅', title: 'Baixa Fricção', desc: 'Formulário mínimo viável' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-display font-medium text-white">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'all' as FilterType, label: 'Todas' },
              { id: 'high-conversion' as FilterType, label: '🔥 Alta Conversão' },
              { id: 'low-effort' as FilterType, label: '⚡ Baixo Esforço' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                    : 'bg-slate-800/30 text-slate-400 border border-slate-700/50 hover:border-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Categories grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
                isVisible={gridVisible}
              />
            ))}
          </div>

          {/* Pro tip */}
          <div className="mt-12 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-display font-semibold text-white mb-2">Dica Pro: Combine Iscas</h4>
                <p className="text-slate-400 text-sm">
                  As melhores estratégias usam <span className="text-purple-400">iscas interativas</span> (Quiz, Calculadora)
                  para captura inicial, seguidas de <span className="text-cyan-400">iscas de conhecimento</span> (Ebook, Webinar)
                  para nurturing, e <span className="text-orange-400">iscas de urgência</span> (Cupom, Bônus) para conversão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Breather */}
      <Section id="breather3" temperature="warm">
        <Breather
          type="question"
          temperature="warm"
          content="Você tem iscas para CADA estágio do seu funil?"
        />
      </Section>

      <Section id="transition3" temperature="warm">
        <Breather
          type="transition"
          temperature="warm"
          content="Com o arsenal montado, é hora de ver como a máquina opera no dia-a-dia."
        />
      </Section>
    </>
  );
}
