import {
  CommonModule
} from '@angular/common';

import {
  Component
} from '@angular/core';

import {
  PROJECTS,
  PortfolioProject
} from '../../core/data/projects.data';


@Component({
  selector: 'app-home',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './home.component.html',

  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent {

  readonly projects:
    PortfolioProject[] = PROJECTS;


  readonly featuredProjects:
    PortfolioProject[] =
      PROJECTS.filter(
        project =>
          project.featured
      );


  readonly skills = [

    {
      title: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'Responsive Design'
      ]
    },

    {
      title: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'REST API',
        'Spring Security',
        'JWT'
      ]
    },

    {
      title: 'Database & Tools',
      items: [
        'MySQL',
        'Git',
        'GitHub',
        'Postman',
        'IntelliJ',
        'VS Code'
      ]
    },

    {
      title: 'AI Integration',
      items: [
        'Flask',
        'Gemini API',
        'Python',
        'Prompt Engineering'
      ]
    }
  ];


  scrollToSection(
    sectionId: string
  ): void {

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  }
}
