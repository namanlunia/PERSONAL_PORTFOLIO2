export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'about', number: '01', label: '01 / ABOUT', href: '#about' },
  { id: 'roadmap', number: '02', label: '02 / ROADMAP', href: '#roadmap' },
  { id: 'projects', number: '03', label: '03 / PROJECTS', href: '#projects' },
  { id: 'achievements', number: '04', label: '04 / ACHIEVEMENTS', href: '#achievements' },
  { id: 'contact', number: '05', label: '05 / CONTACT', href: '#contact' },
];

export interface ContactLink {
  type: string;
  label: string;
  url: string;
}

export const contactData = {
  heading: 'Contact',
  lead: 'Recruiters and mentors are invited to reach out regarding internships, game development advice, or potential collaborations.',
  links: [
    {
      type: 'Email',
      label: 'namanlunia229@gmail.com',
      url: 'mailto:namanlunia229@gmail.com',
    },
    {
      type: 'GitHub',
      label: 'https://github.com/namanlunia',
      url: 'https://github.com/namanlunia',
    },
    {
      type: 'LinkedIn',
      label: 'https://www.linkedin.com/in/naman-lunia-b06959415/',
      url: 'https://www.linkedin.com/in/naman-lunia-b06959415/',
    },
  ] as ContactLink[],
};

export const tickerItems = [
  'CURRENTLY LEARNING GAME DEVELOPMENT',
  'BUILDING ATEEVIBES',
  'HOSTING A HACKATHON SITE',
  'CSE WITH AI AND ML',
];
