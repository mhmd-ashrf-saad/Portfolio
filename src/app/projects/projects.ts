import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  codeImage: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  currentSlide = 0;

  // Sample projects data - replace with your actual projects
  projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Angular and Firebase. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "assets/projects/ecommerce-preview.jpg",
      codeImage: "assets/projects/ecommerce-code.jpg",
      technologies: ["Angular", "TypeScript", "Firebase", "Stripe"],
      liveUrl: "https://your-ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce-project"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "assets/projects/taskapp-preview.jpg",
      codeImage: "assets/projects/taskapp-code.jpg",
      technologies: ["Angular", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://your-taskapp-demo.com",
      githubUrl: "https://github.com/yourusername/task-management"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.",
      image: "assets/projects/weather-preview.jpg",
      codeImage: "assets/projects/weather-code.jpg",
      technologies: ["Angular", "OpenWeather API", "Chart.js", "PWA"],
      liveUrl: "https://your-weather-demo.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  nextSlide() {
    if (this.currentSlide < this.projects.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

}
