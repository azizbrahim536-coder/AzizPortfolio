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
      category: 'Kanban Task Manager',
      description:
        'Application Kanban pour organiser les tâches avec colonnes, cartes et suivi du workflow.',
      image:
        'assets/projects/taskflow-kanban.png',
      technologies: [
        'Angular',
        'TypeScript',
        'CSS',
        'LocalStorage'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/TaskFlowAI',
      featured:
        true
    },

    {
      name: 'StudyPlanner',
      category: 'Study Management',
      description:
        'Application pour organiser les matières, les séances de révision et le planning d’étude.',
      image:
        'assets/projects/studyplanner-home.png',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/StudyPlanner',
      featured:
        false
    },

    {
      name: 'NoteApp',
      category: 'Notes Application',
      description:
        'Application simple de prise de notes avec création, édition et suppression de notes.',
      image:
        'assets/projects/noteapp-home.png',
      technologies: [
        'Angular',
        'TypeScript',
        'LocalStorage',
        'CSS'
      ],
      githubUrl:
        'https://github.com/azizbrahim536-coder/NoteApp',
      featured:
        false
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
