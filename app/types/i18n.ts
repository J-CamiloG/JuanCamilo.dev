export interface Translations {
  welcome: string;
  name: string;
  fullStackDev: string;
  uiuxEnthusiast: string;
  webCreator: string;
  description: string;
  downloadCV: string;
  visitLinkedIn: string;
  visitGitHub: string;
  viewAllNews: string;
  myLatestNews: string;
  readMore: string;
  home: string;
  aboutMe: string;
  projects: string;
  achievements: string;
  contact: string;
}

export interface Languages {
  [key: string]: {
    translation: Translations;
  };
}