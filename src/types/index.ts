interface LocalizedString {
  en: string;
  kr: string;
}

interface TeamMember {
  role: LocalizedString;
  responsibilities: LocalizedString;
}

export interface Project {
  id: string;
  type: 'web' | 'app';
  title: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  projectUrl: string;
  screenshots: string[];
  details: {
    period: LocalizedString;
    team: TeamMember[];
    stack: string[];
    features: {
      en: string[];
      kr: string[];
    };
    about: LocalizedString;
    successMetrics: {
      [key: string]: number;
    };
  };
  links: {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
    blog?: string;
  };
}