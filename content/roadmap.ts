export interface RoadmapNode {
  id: string;
  label: string;
  status: string;
  statusType: 'unlocked' | 'progress' | 'next';
  note: string;
}

export const roadmapData: RoadmapNode[] = [
  {
    id: 'prog-foundations',
    label: 'Programming foundations',
    status: 'UNLOCKED',
    statusType: 'unlocked',
    note: 'Mastery of algorithmic problem solving, core computer science structures, and systematic logic.',
  },
  {
    id: 'web-basics',
    label: 'Web development basics',
    status: 'UNLOCKED',
    statusType: 'unlocked',
    note: 'Semantic HTML5, CSS responsive architecture, and vanilla JavaScript programming.',
  },
  {
    id: 'iot-basics',
    label: 'IoT basics (plant-watering device)',
    status: 'UNLOCKED',
    statusType: 'unlocked',
    note: 'Hardware telemetry, moisture sensing, and automatic plant-watering device construction.',
  },
  {
    id: 'ai-ml-fundamentals',
    label: 'AI and ML fundamentals',
    status: 'UNLOCKED',
    statusType: 'unlocked',
    note: 'Five IBM SkillsBuild certifications covering NLP, ML algorithms, data analytics, and prompt engineering.',
  },
  {
    id: 'gamedev-fundamentals',
    label: 'Game development fundamentals',
    status: 'NOW',
    statusType: 'progress',
    note: 'Studying core game engine architectures, game math, collision detection, and rendering loops.',
  },
  {
    id: 'ship-game',
    label: 'Ship a first complete game',
    status: 'NEXT GOAL',
    statusType: 'next',
    note: 'Design, code, and publish a complete original game with mechanics, audio, and progression.',
  },
  {
    id: 'robotics-project',
    label: 'Build a robotics project',
    status: 'NEXT GOAL',
    statusType: 'next',
    note: 'Construct a complex autonomous robotics prototype integrating hardware sensors and motor actuation.',
  },
];
