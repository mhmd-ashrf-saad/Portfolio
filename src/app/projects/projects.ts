import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
  private autoPlayDuration = 300000000; // 3 sec
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
      title: "Tarabiza",
      description: "Developed a furniture website, Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript, Built robust server-side functionality using Django and integrated PostgreSQL for database\n" +
        "management",
      image: "projects/tarabiza.jpg",
      technologies: ["Django", "JavaScript", "PostgreSQL", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/mohamednnj/ITI-projcet"
    },
    {
      id: 2,
      title: "U-learning",
      description: "user-friendly educational platform, front-end implemented using HTML5, CSS3, JavaScript, TypeScript, Angular (for dynamic UI components, routing, and reactive forms),\n" +
        "Bootstrap (for responsive design and styling), Angular Material (for modern UI elements)",
      image: "projects/ulearning.png",
      technologies: ["Angular", "Angular Material", "MongoDB","Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/mhmd-ashrf-saad/U-LearningDotNetEntityFramework"
    },
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
