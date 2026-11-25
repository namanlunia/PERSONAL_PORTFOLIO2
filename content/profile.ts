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
    pullRequests: string;
    certificates: string;
    level: string;
  };
  about: {
    paragraph: string;
  };
}

export const profileData: ProfileData = {
  name: 'Naman Lunia',
  firstName: 'NAMAN',
  lastName: 'LUNIA',
  headline: 'First-year Computer Science student building real projects and working toward a career in game development.',
  subline: 'B.Tech CSE with AI and ML specialisation, Newton School of Technology. Expected graduation: June 2030.',
  card: {
    classTitle: 'CSE, AI and ML',
    guild: 'Newton School of Technology',
    goal: 'Game developer',
    pullRequests: '10 submitted',
    certificates: '11',
    level: '01',
  },
  about: {
    paragraph:
      'I am a first-year B.Tech Computer Science student with a specialisation in AI and ML at Newton School of Technology, graduating in June 2030. I am an aspiring game developer with a strong interest in robotics and IT. I have built an e-commerce website, the interface of an open-source program website and a Groq-powered LLM playground, and I have submitted ten pull requests to an open-source Python repository through my S&AI course. I am looking for game development internships where I can build real projects and learn from experienced engineers.',
  },
};
