export type Language = 'zh' | 'en';

export interface Project {
  id: string;
  category: 'all' | 'ai' | 'backend' | 'fullstack';
  title: string;
  titleEn: string;
  headline: string;
  headlineEn: string;
  impactMetric: string;
  impactMetricEn: string;
  description: string;
  descriptionEn: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails: {
    overview: string;
    overviewEn: string;
    challenges: string[];
    challengesEn: string[];
    keyDecisions: string[];
    keyDecisionsEn: string[];
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  skills: {
    name: string;
    proficiencyContext: string; // e.g. "核心主修", "生產環境實戰", "日常架構"
    proficiencyContextEn: string;
    highlight?: boolean;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'instagram' | 'mail';
  handle: string;
}
