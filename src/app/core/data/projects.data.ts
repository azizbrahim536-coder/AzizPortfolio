export interface PortfolioProject {
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}


export const PROJECTS:
  PortfolioProject[] = [

    {
      name: 'CareerPilotAI',
      category: 'Full Stack AI Application',
      description:
        'Application full-stack pour gérer les candidatures, les offres d’emploi, les entreprises et les entretiens avec un assistant IA basé sur Gemini.',
      image:
        'assets/projects/careerpilot-dashboard.png',
      technologies: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'JWT',
        'Flask',
        'Gemini API'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/CareerPilotAI',
      featured:
        true
    },

    {
      name: 'BudgetPilotAI',
      category: 'Finance Dashboard',
      description:
        'Application de gestion de budget avec suivi des revenus, dépenses, catégories et statistiques financières.',
      image:
        'assets/projects/budgetpilot-dashboard.png',
      technologies: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Charts',
        'REST API'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/BudgetPilotAI',
      featured:
        true
    },

  {
  name: 'TaskFlowAI',
  category: 'Full Stack AI Kanban App',
  description:
    'Application full-stack de gestion des tâches avec tableau Kanban, backend Spring Boot et service IA pour assister l’organisation du workflow.',
  image:
    'assets/projects/taskflow-kanban.png',
  technologies: [
    'Angular',
    'Spring Boot',
    'MySQL',
    'Flask',
    'AI Service',
    'REST API'
  ],
  githubUrl:
    'https://github.com/azizbrahim536-coder/TaskFlowAI',
  featured:
    true
},

  {
  name: 'StudyPlanner',
  category: 'Full Stack AI Study Planner',
  description:
    'Application full-stack pour organiser les matières, les séances de révision et le planning d’étude avec un backend Spring Boot et un service IA pour générer des plans de révision.',
  image:
    'assets/projects/studyplanner-home.png',
  technologies: [
    'Angular',
    'Spring Boot',
    'MySQL',
    'Flask',
    'AI Service',
    'REST API'
  ],
  githubUrl:
    'https://github.com/azizbrahim536-coder/StudyPlanner',
  featured:
    true
},

{
  name: 'NoteApp',
  category: 'Full Stack Notes Application',
  description:
    'Application full-stack de prise de notes avec création, modification, suppression et organisation des notes, développée avec Angular, Spring Boot et MySQL.',
  image:
    'assets/projects/noteapp-home.png',
  technologies: [
    'Angular',
    'Spring Boot',
    'MySQL',
    'REST API',
    'AI Service',
    'TypeScript',
    'CSS'
  ],
  githubUrl:
    'https://github.com/azizbrahim536-coder/NoteApp',
  featured:
    true
},

    {
      name: 'PrayerTimesApp',
      category: 'Prayer Times App',
      description:
        'Application Angular affichant les horaires de prière en Tunisie avec prochaine prière, countdown, date hijri et sélection de ville.',
      image:
        'assets/projects/prayertimes-home.png',
      technologies: [
        'Angular',
        'TypeScript',
        'AlAdhan API',
        'CSS'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/PrayerTimesApp',
      featured:
        false
    }
  ];
