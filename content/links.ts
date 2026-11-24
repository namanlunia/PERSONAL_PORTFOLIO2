export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'about', number: '01', label: '01 About', href: '#about' },
  { id: 'roadmap', number: '02', label: '02 Roadmap', href: '#roadmap' },
  { id: 'projects', number: '03', label: '03 Projects', href: '#projects' },
  { id: 'achievements', number: '04', label: '04 Achievements', href: '#achievements' },
  { id: 'contact', number: '05', label: '05 Contact', href: '#contact' },
];

export interface ContactLink {
  type: string;
  label: string;
  url: string;
  action: string;
}

export const contactData = {
  heading: 'Have a useful problem to solve?',
  lead: 'Share the context, constraints, and where you want to go next. Recruiters and mentors are invited to reach out regarding internships, game development advice, or potential collaborations.',
  links: [
    {
      type: 'Email',
      label: 'namanlunia229@gmail.com',
      url: 'mailto:namanlunia229@gmail.com',
      action: 'SEND EMAIL →',
    },
    {
      type: 'GitHub',
      label: 'github.com/namanlunia',
      url: 'https://github.com/namanlunia',
      action: 'VIEW REPOSITORY →',
    },
    {
      type: 'LinkedIn',
      label: 'linkedin.com/in/naman-lunia-b06959415',
      url: 'https://www.linkedin.com/in/naman-lunia-b06959415/',
      action: 'CONNECT →',
    },
  ] as ContactLink[],
};

export const tickerItems = [
  'CURRENTLY LEARNING GAME DEVELOPMENT',
  'BUILDING ATEEVIBES',
  'HOSTING A HACKATHON SITE',
  'CSE WITH AI AND ML',
];
