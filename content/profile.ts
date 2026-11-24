export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  subline: string;
  card: {
    classTitle: string;
    guild: string;
    goal: string;
    status: string;
  };
  about: {
    bioParagraph: string;
  };
  stats: {
    name: string;
    level: string;
    filledSegments: number; // 1 to 5
  }[];
  loadout: string[];
}

export const profileData: ProfileData = {
  name: 'Naman Lunia',
  firstName: 'NAMAN',
  lastName: 'LUNIA',
  headline: 'First-year Computer Science student building real projects and working toward a career in game development.',
  subline: 'B.Tech CSE with AI and ML specialisation, Newton School of Technology',
  card: {
    classTitle: 'CSE, AI and ML',
    guild: 'Newton School of Technology',
    goal: 'Game Developer',
    status: 'Online',
  },
  about: {
    bioParagraph:
      'Naman is a first-year Computer Science and Engineering student specialising in AI and ML at Newton School of Technology. He is starting out in game development, understands core game engine concepts and how basic games are structured, and is also interested in robotics. He has built an automated IoT plant-watering device and develops websites with AI-assisted workflows. His goal is to become the best game developer he can be.',
  },
  stats: [
    {
      name: 'Game development',
      level: 'Learning',
      filledSegments: 1,
    },
    {
      name: 'Robotics and IoT',
      level: 'Hands-on (one device built)',
      filledSegments: 2,
    },
    {
      name: 'AI and ML',
      level: 'Coursework (5 certificates)',
      filledSegments: 3,
    },
    {
      name: 'Web development',
      level: 'Building (2 active projects)',
      filledSegments: 3,
    },
    {
      name: 'Prompt engineering',
      level: 'Practised',
      filledSegments: 4,
    },
  ],
  loadout: [
    'Antigravity',
    'OpenCode',
    'Claude',
    'GitHub',
    'HTML',
    'CSS',
    'JavaScript',
  ],
};
