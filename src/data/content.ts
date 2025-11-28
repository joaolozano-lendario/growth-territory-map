// Growth Hacking Epistemic Map - Complete Content Data

export const heroStats = {
  startups: '90%',
  survive: '10%',
  difference: 'MAPA'
};

export const eightComponents = [
  {
    id: 1,
    title: 'Mentalidade Growth',
    description: 'Obsessão por métricas, experimentação constante, foco em escala',
    icon: '🧠',
    color: 'cyan'
  },
  {
    id: 2,
    title: 'Framework AARRR',
    description: 'Acquisition, Activation, Retention, Revenue, Referral - O funil pirata',
    icon: '🏴‍☠️',
    color: 'emerald'
  },
  {
    id: 3,
    title: 'Máquina de Experimentos',
    description: 'Processo de 9 passos para validar hipóteses com dados',
    icon: '🔬',
    color: 'purple'
  },
  {
    id: 4,
    title: 'Sistema de Funis',
    description: 'AARRR + Consciência + PLG - Três lentes para o mesmo território',
    icon: '🔄',
    color: 'blue'
  },
  {
    id: 5,
    title: 'Arsenal de Iscas',
    description: '19 tipos de lead magnets em 5 categorias estratégicas',
    icon: '🎣',
    color: 'orange'
  },
  {
    id: 6,
    title: 'Métricas & North Star',
    description: 'Uma métrica que governa todas. Hierarquia clara de KPIs',
    icon: '⭐',
    color: 'yellow'
  },
  {
    id: 7,
    title: 'Growth Loops',
    description: '5 tipos de loops que se auto-alimentam: viral, conteúdo, pago, notificação, vendas',
    icon: '♾️',
    color: 'pink'
  },
  {
    id: 8,
    title: 'Stack Tecnológico',
    description: 'Ferramentas de analytics, automação, CRM, testes A/B',
    icon: '🛠️',
    color: 'slate'
  }
];

export const funnelAARRR = {
  title: 'AARRR - O Funil Pirata',
  subtitle: 'O framework que transformou o growth em ciência',
  stages: [
    {
      letter: 'A',
      name: 'Acquisition',
      portuguese: 'Aquisição',
      question: 'Como usuários te encontram?',
      metrics: ['Sessions', 'CAC', 'CPL', 'CTR'],
      gap: '95-98%',
      color: '#06b6d4'
    },
    {
      letter: 'A',
      name: 'Activation',
      portuguese: 'Ativação',
      question: 'Primeira experiência foi boa?',
      metrics: ['Time-to-Value', 'Activation Rate', 'Onboarding Completion'],
      gap: '60-80%',
      color: '#10b981'
    },
    {
      letter: 'R',
      name: 'Retention',
      portuguese: 'Retenção',
      question: 'Eles voltam?',
      metrics: ['D1/D7/D30', 'Churn Rate', 'DAU/MAU'],
      gap: '70-90%',
      color: '#8b5cf6'
    },
    {
      letter: 'R',
      name: 'Revenue',
      portuguese: 'Receita',
      question: 'Como você monetiza?',
      metrics: ['LTV', 'ARPU', 'MRR', 'LTV:CAC'],
      gap: '90-95%',
      color: '#f97316'
    },
    {
      letter: 'R',
      name: 'Referral',
      portuguese: 'Referência',
      question: 'Eles indicam outros?',
      metrics: ['K-Factor', 'NPS', 'Viral Coefficient'],
      gap: '95-99%',
      color: '#ec4899'
    }
  ]
};

export const awarenessStages = [
  {
    level: 1,
    name: 'Unaware',
    portuguese: 'Inconsciente',
    percentage: '80%',
    description: 'Não sabe que tem um problema',
    iscas: ['Conteúdo viral', 'Entretenimento', 'Curiosidade'],
    color: '#64748b'
  },
  {
    level: 2,
    name: 'Problem Aware',
    portuguese: 'Consciente do Problema',
    percentage: '15%',
    description: 'Sabe que tem problema, não sabe a solução',
    iscas: ['Quiz diagnóstico', 'Checklist de sintomas', 'Artigos educativos'],
    color: '#06b6d4'
  },
  {
    level: 3,
    name: 'Solution Aware',
    portuguese: 'Consciente da Solução',
    percentage: '3%',
    description: 'Conhece soluções, não conhece você',
    iscas: ['Comparativos', 'Webinars', 'Case studies'],
    color: '#10b981'
  },
  {
    level: 4,
    name: 'Product Aware',
    portuguese: 'Consciente do Produto',
    percentage: '1.5%',
    description: 'Conhece você, ainda não decidiu',
    iscas: ['Demo', 'Trial', 'Consulta gratuita'],
    color: '#8b5cf6'
  },
  {
    level: 5,
    name: 'Most Aware',
    portuguese: 'Mais Consciente',
    percentage: '0.5%',
    description: 'Pronto para comprar, precisa de empurrão',
    iscas: ['Cupom', 'Bônus', 'Urgência'],
    color: '#f97316'
  }
];

export const plgFunnel = {
  title: 'Product-Led Growth',
  subtitle: 'Quando o produto é o principal motor de crescimento',
  stages: [
    {
      name: 'Signup',
      description: 'Usuário cria conta',
      metric: 'Conversion Rate',
      target: '3-5%'
    },
    {
      name: 'Aha Moment',
      description: 'Primeira experiência de valor',
      metric: 'Time-to-Aha',
      target: '< 5 min'
    },
    {
      name: 'Habit',
      description: 'Uso recorrente estabelecido',
      metric: 'D7 Retention',
      target: '> 40%'
    },
    {
      name: 'Paywall',
      description: 'Encontra limite do free',
      metric: 'Paywall Hit Rate',
      target: '> 30%'
    },
    {
      name: 'Paid',
      description: 'Converte para pago',
      metric: 'Free-to-Paid',
      target: '2-5%'
    },
    {
      name: 'Power User',
      description: 'Uso avançado + advocacy',
      metric: 'NPS',
      target: '> 50'
    }
  ]
};

export const leadMagnets = {
  categories: [
    {
      name: 'Conhecimento',
      icon: '📚',
      color: '#06b6d4',
      conversion: '15-25%',
      types: [
        { name: 'Ebook', effort: 'Alto', conversion: '15-20%' },
        { name: 'Checklist', effort: 'Baixo', conversion: '20-30%' },
        { name: 'Swipe File', effort: 'Médio', conversion: '25-35%' },
        { name: 'Webinar', effort: 'Alto', conversion: '20-40%' },
        { name: 'Mini-curso', effort: 'Alto', conversion: '30-50%' }
      ]
    },
    {
      name: 'Interativas',
      icon: '🎮',
      color: '#10b981',
      conversion: '30-50%',
      highlight: true,
      types: [
        { name: 'Quiz', effort: 'Médio', conversion: '30-50%' },
        { name: 'Calculadora', effort: 'Alto', conversion: '35-55%' },
        { name: 'Diagnóstico', effort: 'Médio', conversion: '40-60%' },
        { name: 'Grader/Audit', effort: 'Alto', conversion: '35-50%' }
      ]
    },
    {
      name: 'Acesso',
      icon: '🔓',
      color: '#8b5cf6',
      conversion: '20-35%',
      types: [
        { name: 'Trial', effort: 'Alto', conversion: '15-25%' },
        { name: 'Demo', effort: 'Médio', conversion: '20-35%' },
        { name: 'Sandbox', effort: 'Alto', conversion: '25-40%' },
        { name: 'Comunidade', effort: 'Baixo', conversion: '15-25%' }
      ]
    },
    {
      name: 'Urgência',
      icon: '⚡',
      color: '#f97316',
      conversion: '40-60%',
      highlight: true,
      types: [
        { name: 'Cupom', effort: 'Baixo', conversion: '40-60%' },
        { name: 'Bônus Exclusivo', effort: 'Médio', conversion: '35-55%' },
        { name: 'Early Access', effort: 'Baixo', conversion: '30-50%' }
      ]
    },
    {
      name: 'Prova Social',
      icon: '🏆',
      color: '#ec4899',
      conversion: '20-35%',
      types: [
        { name: 'Case Study', effort: 'Alto', conversion: '20-35%' },
        { name: 'Depoimentos', effort: 'Médio', conversion: '15-25%' },
        { name: 'Comparativo', effort: 'Médio', conversion: '25-40%' }
      ]
    }
  ]
};

export const funnelMachine = {
  roles: [
    {
      name: 'TOFU',
      owner: 'Érica',
      title: 'Motor de Captura',
      color: '#06b6d4',
      input: 'Audiência anônima',
      output: 'Leads capturados',
      northStar: 'Volume de Leads Entregues',
      metrics: ['CPL', 'Conversion Rate', 'Qualidade'],
      responsibilities: [
        'Produção de conteúdo',
        'Distribuição multicanal',
        'Lead magnets',
        'Landing pages',
        'Welcome sequence'
      ]
    },
    {
      name: 'MOFU',
      owner: 'João',
      title: 'Motor de Qualificação',
      color: '#10b981',
      input: 'Leads (TOFU)',
      output: 'MQL/SQL',
      northStar: 'MQL Rate (20-30%)',
      metrics: ['Time-to-MQL', 'Open Rate', 'MQL→SQL'],
      responsibilities: [
        'Segmentação avançada',
        'Lead scoring',
        'Email nurturing',
        'Conteúdo educacional',
        'Identificação MQL/SQL'
      ]
    },
    {
      name: 'BOFU',
      owner: 'Fran',
      title: 'Motor de Conversão',
      color: '#f97316',
      input: 'MQL/SQL (MOFU)',
      output: 'Clientes pagantes',
      northStar: 'SQL→Cliente (25-35%)',
      metrics: ['Sales Cycle', 'Ticket Médio', 'SLA 24h'],
      responsibilities: [
        'Abordagem ativa',
        'Demos e trials',
        'Negociação',
        'Fechamento',
        'Handoff para CS'
      ]
    }
  ],
  scoring: {
    fit: {
      max: 50,
      components: ['Demographics (0-15)', 'Psychographics (0-20)', 'Source Quality (0-15)']
    },
    interest: {
      max: 50,
      components: ['Email Engagement (0-25)', 'Content Consumption (0-30)', 'Website Behavior (0-20)']
    },
    thresholds: [
      { range: '0-40', status: 'COLD', action: 'Low-touch nurturing' },
      { range: '41-70', status: 'WARM', action: 'Active nurturing' },
      { range: '71-85', status: 'MQL', action: 'High-touch + notifica vendas' },
      { range: '86+', status: 'SQL', action: 'Handoff imediato' }
    ],
    decay: '-5 pontos/semana sem atividade'
  }
};

export const northStarExamples = [
  { company: 'Facebook', metric: 'DAU', category: 'Social' },
  { company: 'Instagram', metric: 'Stories Created', category: 'Social' },
  { company: 'Airbnb', metric: 'Nights Booked', category: 'Marketplace' },
  { company: 'Uber', metric: 'Rides Completed', category: 'Marketplace' },
  { company: 'Slack', metric: 'Messages/Team', category: 'SaaS' },
  { company: 'Notion', metric: 'Pages/User', category: 'SaaS' },
  { company: 'Netflix', metric: 'Hours Watched', category: 'Media' },
  { company: 'Spotify', metric: 'Time Listening', category: 'Media' }
];

export const growthLoops = [
  {
    name: 'Viral Loop',
    description: 'Usuários convidam usuários',
    example: 'Dropbox: Indique e ganhe espaço',
    metric: 'K-Factor > 1',
    color: '#ec4899'
  },
  {
    name: 'Content Loop',
    description: 'Conteúdo gera tráfego que gera conteúdo',
    example: 'HubSpot: Blog → Leads → Cases',
    metric: 'Organic Traffic Growth',
    color: '#06b6d4'
  },
  {
    name: 'Paid Loop',
    description: 'Revenue financia mais aquisição',
    example: 'LTV > CAC permite escalar',
    metric: 'LTV:CAC > 3:1',
    color: '#f97316'
  },
  {
    name: 'Notification Loop',
    description: 'Engajamento gera reengajamento',
    example: 'LinkedIn: Alguém viu seu perfil',
    metric: 'DAU/MAU Ratio',
    color: '#8b5cf6'
  },
  {
    name: 'Sales Loop',
    description: 'Clientes viram cases que vendem',
    example: 'Enterprise: ROI comprovado',
    metric: 'Case Study Conversion',
    color: '#10b981'
  }
];

export const experimentProcess = [
  { step: 1, name: 'Hipótese', description: 'Se fizermos X, então Y porque Z' },
  { step: 2, name: 'ICE Score', description: 'Impact × Confidence × Ease' },
  { step: 3, name: 'Design', description: 'Definir métricas, controle, duração' },
  { step: 4, name: 'Implementar', description: 'Código mínimo viável' },
  { step: 5, name: 'Coletar', description: 'Dados estatisticamente significativos' },
  { step: 6, name: 'Analisar', description: 'Significância, uplift, segmentos' },
  { step: 7, name: 'Decidir', description: 'Ship, iterate, ou kill' },
  { step: 8, name: 'Documentar', description: 'Learnings para o time' },
  { step: 9, name: 'Repetir', description: 'Próxima hipótese da lista' }
];

export const tableOfContents = [
  { id: 'prologue', title: 'Prólogo', subtitle: 'O Território' },
  { id: 'act1', title: 'Ato 1', subtitle: 'A Fundação' },
  { id: 'act2', title: 'Ato 2', subtitle: 'Os Três Funis' },
  { id: 'act3', title: 'Ato 3', subtitle: 'O Arsenal' },
  { id: 'act4', title: 'Ato 4', subtitle: 'A Máquina' },
  { id: 'act5', title: 'Ato 5', subtitle: 'As Métricas' },
  { id: 'epilogue', title: 'Epílogo', subtitle: 'Seu Próximo Passo' }
];
