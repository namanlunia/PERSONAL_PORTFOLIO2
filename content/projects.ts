export interface Project {
  slug: string;
  index: string;
  title: string;
  status: 'IN PROGRESS' | 'COMPLETED' | 'PLANNED';
  statusVariant: 'progress' | 'completed' | 'planned';
  spriteType: 'garment' | 'trophy' | 'plant';
  overview: string;
  goal: string;
  tools: string[];
  nextStep: string;
  links: {
    label: 'Live site' | 'Repository';
    url: string;
    isPlaceholder: boolean;
  }[];
}

export const projectsData: Project[] = [
  {
    slug: 'ateevibes-ecommerce',
    index: '01',
    title: 'Ateevibes E-commerce Website',
    status: 'IN PROGRESS',
    statusVariant: 'progress',
    spriteType: 'garment',
    overview:
      'A complete e-commerce website built from scratch for a family clothing brand. Provides product catalog browsing, responsive views, and shopping features.',
    goal: 'Build a complete production-ready e-commerce store for family clothing brand.',
    tools: ['Antigravity', 'OpenCode', 'Claude'],
    nextStep: 'Finalize checkout workflows and responsive deployment.',
    links: [
      {
        label: 'Live site',
        url: '#',
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: 'hackathon-frontend',
    index: '02',
    title: 'Hackathon Website Frontend',
    status: 'IN PROGRESS',
    statusVariant: 'progress',
    spriteType: 'trophy',
    overview:
      'The frontend of a hackathon website that Naman is hosting for his senior. Features event schedule timelines, registration pathways, and guidelines.',
    goal: 'Deploy frontend interface for senior hackathon host event.',
    tools: ['Antigravity', 'Claude'],
    nextStep: 'Connect registration workflows and schedule timeline.',
    links: [
      {
        label: 'Repository',
        url: '#',
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: 'automatic-plant-watering-device',
    index: '03',
    title: 'Automatic Plant-Watering Device',
    status: 'COMPLETED',
    statusVariant: 'completed',
    spriteType: 'plant',
    overview:
      'A basic IoT device that waters a plant automatically. Monitors soil conditions with a dedicated moisture sensor and triggers irrigation.',
    goal: 'Automate plant hydration based on real-time soil moisture telemetry.',
    tools: ['Soil Moisture Sensor', 'Microcontroller Board (Hardware details placeholder)'],
    nextStep: 'Completed and operational.',
    links: [
      {
        label: 'Repository',
        url: '#',
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: 'template-slot-04',
    index: '04',
    title: '[Template] Project Slot 04',
    status: 'PLANNED',
    statusVariant: 'planned',
    spriteType: 'trophy',
    overview:
      'Reserved for next game development prototype or mechanics demonstration. Duplicate this block to add a new project entry.',
    goal: 'To be added',
    tools: ['Game Engine', 'C# / C++'],
    nextStep: 'To be added',
    links: [
      {
        label: 'Repository',
        url: '#',
        isPlaceholder: true,
      },
    ],
  },
  {
    slug: 'template-slot-05',
    index: '05',
    title: '[Template] Project Slot 05',
    status: 'PLANNED',
    statusVariant: 'planned',
    spriteType: 'plant',
    overview:
      'Reserved for upcoming AI coursework or graphics simulation project. Duplicate this block to add a new project entry.',
    goal: 'To be added',
    tools: ['Python', 'WebGL'],
    nextStep: 'To be added',
    links: [
      {
        label: 'Repository',
        url: '#',
        isPlaceholder: true,
      },
    ],
  },
];
