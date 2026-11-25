export interface SkillItem {
  name: string;
  evidence: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      {
        name: 'Python',
        evidence: 'PRs #75 to #84 in S-AI-Projects/geekcomputers-Python',
        url: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/84',
      },
      {
        name: 'TypeScript',
        evidence: 'Ateevibes storefront & OWOC platform tsconfig',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/tsconfig.json',
      },
      {
        name: 'JavaScript',
        evidence: 'LLM Pipeline Explorer js/ modules & LLM Playground',
        url: 'https://github.com/namanlunia/LLMTokenizer/tree/main/js',
      },
      {
        name: 'HTML and CSS',
        evidence: 'LLM Pipeline Explorer styling & LLM Playground single-page app',
        url: 'https://github.com/namanlunia/LLMTokenizer/blob/main/styles.css',
      },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      {
        name: 'React 19 and Vite',
        evidence: 'Ateevibes package.json dependencies',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/package.json',
      },
      {
        name: 'Next.js 14 App Router',
        evidence: 'OWOC platform package.json & Next.js 14 App Router',
        url: 'https://github.com/namanlunia/Event/blob/main/package.json',
      },
      {
        name: 'Tailwind CSS',
        evidence: 'Ateevibes & OWOC Tailwind configuration',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/tailwind.config.js',
      },
      {
        name: 'Zustand',
        evidence: 'Ateevibes src/store & OWOC src/lib/store.ts',
        url: 'https://github.com/namanlunia/Ateevibes_Website/tree/main/src/store',
      },
      {
        name: 'Framer Motion',
        evidence: 'Ateevibes package.json animation dependency',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/package.json',
      },
      {
        name: 'React Hook Form and Zod',
        evidence: 'Ateevibes src/pages/CheckoutPage.tsx validation',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/src/pages/CheckoutPage.tsx',
      },
    ],
  },
  {
    category: 'Backend and APIs',
    skills: [
      {
        name: 'API client with token refresh',
        evidence: 'Ateevibes src/services/apiClient.ts',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/src/services/apiClient.ts',
      },
      {
        name: 'Groq API with streaming',
        evidence: 'LLM Playground index.html SSE streaming',
        url: 'https://github.com/namanlunia/LLMPlayground/blob/main/index.html',
      },
      {
        name: 'Razorpay simulation-first payment flow',
        evidence: 'Ateevibes src/pages/CheckoutPage.tsx payment verification',
        url: 'https://github.com/namanlunia/Ateevibes_Website/blob/main/src/pages/CheckoutPage.tsx',
      },
    ],
  },
  {
    category: 'Testing',
    skills: [
      {
        name: 'pytest and regression tests',
        evidence: 'PR #82 and PR #84 in S-AI-Projects/geekcomputers-Python',
        url: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/84',
      },
      {
        name: 'mutation-style test design',
        evidence: 'PR #84 test_pscheck.py mutation assertion',
        url: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/84',
      },
      {
        name: 'Vitest and React Testing Library',
        evidence: 'Ateevibes src/lib/__tests__ test suite',
        url: 'https://github.com/namanlunia/Ateevibes_Website/tree/main/src/lib/__tests__',
      },
    ],
  },
  {
    category: 'AI and ML concepts',
    skills: [
      {
        name: 'BPE and WordPiece tokenization',
        evidence: 'LLM Pipeline Explorer js/tokenizer.js',
        url: 'https://github.com/namanlunia/LLMTokenizer/blob/main/js/tokenizer.js',
      },
      {
        name: 'Feature-hashed embeddings',
        evidence: 'LLM Pipeline Explorer js/embedding.js',
        url: 'https://github.com/namanlunia/LLMTokenizer/blob/main/js/embedding.js',
      },
      {
        name: 'PCA with power iteration',
        evidence: 'LLM Pipeline Explorer js/pca.js',
        url: 'https://github.com/namanlunia/LLMTokenizer/blob/main/js/pca.js',
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        name: 'Git and GitHub pull requests',
        evidence: '10 S&AI course PRs in S-AI-Projects/geekcomputers-Python',
        url: 'https://github.com/S-AI-Projects/geekcomputers-Python/pulls?q=is%3Apr+author%3Anamanlunia',
      },
      {
        name: 'Vercel deployment',
        evidence: 'Ateevibes storefront live on Vercel',
        url: 'https://clothing-rose-three.vercel.app/',
      },
      {
        name: 'Figma',
        evidence: 'LLM Pipeline Explorer interface design on Figma Site',
        url: 'https://zippy-notice-72291332.figma.site/',
      },
    ],
  },
];
