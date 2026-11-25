export interface ProjectEntry {
  slug: string;
  index: string;
  title: string;
  status: string;
  problem: string;
  solution: string;
  stack: string[];
  contribution: string;
  links: {
    label: string;
    url: string;
    note?: string;
  }[];
}

export const projectsData: ProjectEntry[] = [
  {
    slug: 'ateevibes-ecommerce',
    index: '01',
    title: 'Ateevibes E-commerce Website',
    status: 'IN PROGRESS',
    problem:
      "An Indian men's t-shirt label needed a mobile-first online store that shows its 16 styles with colour variants and supports the full buying journey.",
    solution:
      'React 19 and Vite single-page storefront in strict TypeScript. Zustand stores for cart, wishlist, auth, orders and UI with localStorage persistence. A service layer and API client talk to a separate NestJS backend with token refresh on 401 and an offline catalogue fallback. Product filters sync with URL query parameters. Checkout is a four-step wizard with Zod validation and a simulation-first Razorpay payment flow.',
    stack: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lenis',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Vitest',
      'React Testing Library',
      'NestJS backend',
    ],
    contribution:
      'I defined the requirements and design direction from the brand catalogue and price chart, directed AI coding assistants (Antigravity, OpenCode and Claude) to build the storefront and backend, reviewed and tested the results, and deployed the site on Vercel. 20 Vitest unit tests pass.',
    links: [
      {
        label: 'Live site',
        url: 'https://clothing-rose-three.vercel.app/',
      },
      {
        label: 'Frontend repository',
        url: 'https://github.com/namanlunia/Ateevibes_Website',
      },
      {
        label: 'Backend repository',
        url: 'https://github.com/namanlunia/Ateevibes_Website_backend',
        note: 'Note: Backend repository is private on GitHub; frontend client interfaces via src/services/apiClient.ts',
      },
    ],
  },
  {
    slug: 'owoc-mentorship',
    index: '02',
    title: 'OWOC, Omnikon Winter of Code website',
    status: 'COMPLETED',
    problem:
      'A December 2026 open-source mentorship program needed a site where students see the schedule, projects and leaderboard, and where contributors, maintainers, mentors, ambassadors and admins each get a suitable view.',
    solution:
      'Next.js 14 App Router site with role switching in Zustand, a single source of truth for dates in src/lib/season.ts, Recharts for charts, canvas particle effects, and an optional Supabase PostgreSQL schema with row-level security. A demo mode shows clearly labelled sample data until the program starts.',
    stack: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Recharts',
      'Lucide React',
      'Supabase',
    ],
    contribution:
      'I built the front-end UI of the site with AI coding assistance and deployed it on Vercel.',
    links: [
      {
        label: 'Live site',
        url: 'https://event-black-eight.vercel.app/',
      },
      {
        label: 'Repository',
        url: 'https://github.com/namanlunia/Event',
      },
    ],
  },
  {
    slug: 'llm-playground',
    index: '03',
    title: 'LLM Playground (Groq)',
    status: 'COMPLETED',
    problem:
      'A lightweight way to experiment with Groq-hosted models where users bring their own API key and nothing is stored on a server.',
    solution:
      'Single-page vanilla HTML, CSS and JavaScript application with direct Groq API calls, real-time Server-Sent Events (SSE) streaming responses, parameter controls (temperature, top_p, max_tokens), and client-side chat settings and history preserved in localStorage.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Groq API', 'Server-Sent Events', 'localStorage'],
    contribution:
      'I specified the product, directed AI coding assistants to build it, tested it and deployed it on Vercel.',
    links: [
      {
        label: 'Live site',
        url: 'https://llmplayground-gamma.vercel.app/',
      },
      {
        label: 'Repository',
        url: 'https://github.com/namanlunia/LLMPlayground',
      },
    ],
  },
  {
    slug: 'llm-pipeline-explorer',
    index: '04',
    title: 'LLM Pipeline Explorer',
    status: 'COMPLETED',
    problem:
      'LLM tokenization and embeddings are hard to picture. This tool lets a user train a small BPE-style vocabulary, encode sentences into subwords and view 64-dimensional sentence embeddings projected to 3D with PCA.',
    solution:
      'Pure vanilla JavaScript modules: tokenizer.js (BPE-style training and a WordPiece longest-match encoder), embedding.js (64-D character-trigram feature hashing with a seeded PRNG and cosine similarity), pca.js (power iteration with deflation and no external libraries), and viewer3d.js (canvas 3D viewer with orbit, pan, zoom and hover).',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Canvas', 'Figma'],
    contribution:
      'This is my own reimplementation of the ideas shown in an existing public tool, the LLM Token Explorer. I built the working functionality base with AI assistance and designed the interface in Figma.',
    links: [
      {
        label: 'Live site',
        url: 'https://zippy-notice-72291332.figma.site/',
      },
      {
        label: 'Repository',
        url: 'https://github.com/namanlunia/LLMTokenizer',
      },
    ],
  },
];
