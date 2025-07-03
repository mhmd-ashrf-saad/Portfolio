import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly STORAGE_KEY = 'portfolio_projects';
  
  // Initial projects data (same as in projects.ts)
  private initialProjects: Project[] = [
    {
      id: 1,
      title: "Tarabiza",
      description: "Developed a furniture website, Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript, Built robust server-side functionality using Django and integrated PostgreSQL for database management",
      image: "projects/tarabiza.jpg",
      technologies: ["Django", "JavaScript", "PostgreSQL", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/mohamednnj/ITI-projcet"
    },
    {
      id: 2,
      title: "U-learning",
      description: "user-friendly educational platform, front-end implemented using HTML5, CSS3, JavaScript, TypeScript, Angular (for dynamic UI components, routing, and reactive forms), Bootstrap (for responsive design and styling), Angular Material (for modern UI elements)",
      image: "projects/ulearning.png",
      technologies: ["Angular", "Angular Material", "MongoDB","Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmd-ashrf-saad/U-LearningDotNetEntityFramework"
    },
  ];

  constructor() {
    // Initialize local storage with initial projects if empty
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.initialProjects));
    }
  }

  getProjects(): Observable<Project[]> {
    const projects = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return of(projects);
  }

  getProject(id: number): Observable<Project | undefined> {
    const projects = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const project = projects.find((p: Project) => p.id === id);
    return of(project);
  }

  addProject(project: Project): Observable<Project> {
    const projects = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    projects.push(project);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
    return of(project);
  }

  updateProject(project: Project): Observable<Project> {
    const projects = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const index = projects.findIndex((p: Project) => p.id === project.id);
    
    if (index !== -1) {
      projects[index] = project;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
    }
    
    return of(project);
  }

  deleteProject(id: number): Observable<boolean> {
    const projects = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const filteredProjects = projects.filter((p: Project) => p.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredProjects));
    return of(true);
  }
}