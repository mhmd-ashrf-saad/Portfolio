import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class Projects implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  private autoPlayDuration = 300000; // 5 minutes (you had 300000, which is very long)
  isAutoPlaying = true;

  // Touch/swipe properties
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;
  private minSwipeDistance = 50; // minimum distance for swipe recognition
  private isDragging = false;

  // Projects data
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

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }

    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDuration);

    this.isAutoPlaying = true;
  }

  stopAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
    this.isAutoPlaying = false;
  }

  toggleAutoPlay() {
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.projects.length - 1) {
      this.currentSlide++;
    } else {
      // Loop back to first slide
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      // Loop to last slide
      this.currentSlide = this.projects.length - 1;
    }

    // Reset auto-play timer when manually navigating
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;

    // Reset auto-play timer when manually navigating
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  // Touch/Swipe event handlers
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.isDragging = true;

    // Pause auto-play during touch interaction
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
    }
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;

    // Prevent default scrolling behavior during horizontal swipes
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
    const deltaX = Math.abs(touchX - this.touchStartX);
    const deltaY = Math.abs(touchY - this.touchStartY);

    // If horizontal movement is greater than vertical, prevent scrolling
    if (deltaX > deltaY && deltaX > 10) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;

    this.touchEndX = event.changedTouches[0].clientX;
    this.touchEndY = event.changedTouches[0].clientY;
    this.isDragging = false;

    this.handleSwipe();

    // Resume auto-play after touch interaction
    if (!this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  private handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Check if it's a horizontal swipe (more horizontal movement than vertical)
    if (absDeltaX > absDeltaY && absDeltaX > this.minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide
        this.prevSlide();
      } else {
        // Swipe left - go to next slide
        this.nextSlide();
      }
    }
  }

  // Mouse/Pointer events for desktop drag support (optional)
  onPointerDown(event: PointerEvent) {
    if (event.pointerType === 'touch') {
      this.touchStartX = event.clientX;
      this.touchStartY = event.clientY;
      this.isDragging = true;

      if (this.isAutoPlaying) {
        this.stopAutoPlay();
      }
    }
  }

  onPointerMove(event: PointerEvent) {
    if (event.pointerType === 'touch' && this.isDragging) {
      const deltaX = Math.abs(event.clientX - this.touchStartX);
      const deltaY = Math.abs(event.clientY - this.touchStartY);

      if (deltaX > deltaY && deltaX > 10) {
        event.preventDefault();
      }
    }
  }

  onPointerUp(event: PointerEvent) {
    if (event.pointerType === 'touch' && this.isDragging) {
      this.touchEndX = event.clientX;
      this.touchEndY = event.clientY;
      this.isDragging = false;

      this.handleSwipe();

      if (!this.isAutoPlaying) {
        this.startAutoPlay();
      }
    }
  }
}
