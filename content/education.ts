export interface BadgeItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  verifyUrl: string;
}

export const educationData = {
  degree: 'B.Tech in Computer Science and Engineering (AI and ML specialisation)',
  institution: 'Newton School of Technology',
  expectedGraduation: 'June 2030',
  summary:
    'First-year undergraduate curriculum covering algorithmic foundations, data structures, discrete mathematics, and applied artificial intelligence.',
};

export const achievementsData = {
  headerCounter: '11 certificates, each verifiable on Credly',
  badges: [
    {
      id: 'ai-applications',
      title: 'AI Applications',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'November 04, 2026',
      verifyUrl: 'https://www.credly.com/badges/4a4c1469-0582-43de-a22d-2ea7bfa7769c/public_url',
    },
    {
      id: 'ai-literacy',
      title: 'AI Literacy',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 24, 2026',
      verifyUrl: 'https://www.credly.com/badges/b0865319-ffc5-4588-ac44-298bab2580e7/public_url',
    },
    {
      id: 'ai-fundamentals',
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 22, 2026',
      verifyUrl: 'https://www.credly.com/badges/30a0e6fb-d7f6-4284-9a2f-ffa07646f091/public_url',
    },
    {
      id: 'data-analytics-ml',
      title: 'Data Analytics for Machine Learning',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 23, 2026',
      verifyUrl: 'https://www.credly.com/badges/881a97c8-89a2-40e9-9d6a-bec91e0428ed/public_url',
    },
    {
      id: 'getting-started-ai',
      title: 'Getting Started with Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 23, 2026',
      verifyUrl: 'https://www.credly.com/badges/09843b85-6bb3-4f89-ad27-e92add068463/public_url',
    },
    {
      id: 'ml-data-science',
      title: 'Machine Learning for Data Science Projects',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'November 04, 2026',
      verifyUrl: 'https://www.credly.com/badges/7591d9c4-f941-46c6-a98c-f69e98198856/public_url',
    },
    {
      id: 'ml-methods-tools',
      title: 'Machine Learning Methods and Tools',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 22, 2026',
      verifyUrl: 'https://www.credly.com/badges/267c746f-31be-4cd7-9c14-bc7ed4120467/public_url',
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 23, 2026',
      verifyUrl: 'https://www.credly.com/badges/498f5194-c40c-4bba-9957-51c3454da7b6/public_url',
    },
    {
      id: 'supervised-learning',
      title: 'Supervised Learning Methods',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 24, 2026',
      verifyUrl: 'https://www.credly.com/badges/c428217e-c6f6-4b44-af9e-49e3806eb321/public_url',
    },
    {
      id: 'team-essentials-ai',
      title: 'Team Essentials for Designing AI Solutions',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 24, 2026',
      verifyUrl: 'https://www.credly.com/badges/178d005f-8826-4884-9b17-5168a756475c/public_url',
    },
    {
      id: 'unsupervised-learning',
      title: 'Unsupervised Learning Methods',
      issuer: 'IBM SkillsBuild',
      issuedDate: 'June 25, 2026',
      verifyUrl: 'https://www.credly.com/badges/033afc50-6679-41c8-90f4-142602826875/public_url',
    },
  ] as BadgeItem[],
};
