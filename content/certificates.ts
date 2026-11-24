export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  dateIso: string;
  verifyUrl: string;
  isPlaceholder: boolean;
}

export const certificatesLead =
  'The IBM SkillsBuild courses taught prompt engineering and AI fundamentals, which Naman applies in his web projects.';

export const certificatesData: Certificate[] = [
  {
    id: 'ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 22, 2026',
    dateIso: '2026.06.22',
    verifyUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'ml-methods-tools',
    title: 'Machine Learning Methods and Tools',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 22, 2026',
    dateIso: '2026.06.22',
    verifyUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'data-analytics-ml',
    title: 'Data Analytics for Machine Learning',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 23, 2026',
    dateIso: '2026.06.23',
    verifyUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 23, 2026',
    dateIso: '2026.06.23',
    verifyUrl: '#',
    isPlaceholder: true,
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning Methods',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 24, 2026',
    dateIso: '2026.06.24',
    verifyUrl: '#',
    isPlaceholder: true,
  },
];
