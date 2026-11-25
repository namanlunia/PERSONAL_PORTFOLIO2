export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'about', number: '01', label: '01 About', href: '#about' },
  { id: 'skills', number: '02', label: '02 Skills', href: '#skills' },
  { id: 'contributions', number: '03', label: '03 Contributions', href: '#contributions' },
  { id: 'projects', number: '04', label: '04 Projects', href: '#projects' },
  { id: 'education', number: '05', label: '05 Education', href: '#education' },
  { id: 'contact', number: '06', label: '06 Contact', href: '#contact' },
];

export interface ContactLink {
  type: string;
  label: string;
  url: string;
  action: string;
  note?: string;
}

export const contactData = {
  heading: 'Contact',
  invitation:
    'Recruiters and mentors are warmly invited to reach out regarding game development internships, project feedback, or software engineering opportunities.',
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
      action: 'VIEW GITHUB PROFILE →',
      note: 'This is the account that opened the course pull requests',
    },
    {
      type: 'LinkedIn',
      label: 'linkedin.com/in/naman-lunia-b06959415',
      url: 'https://www.linkedin.com/in/naman-lunia-b06959415/',
      action: 'CONNECT ON LINKEDIN →',
    },
  ] as ContactLink[],
};

export const tickerItems = [
  'CURRENTLY LEARNING GAME DEVELOPMENT',
  '10 S&AI PULL REQUESTS SUBMITTED',
  'BUILDING ATEEVIBES',
  '11 IBM SKILLSBUILD BADGES',
];
