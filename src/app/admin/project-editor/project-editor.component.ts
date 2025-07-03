import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

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
    selector: 'app-project-editor',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './project-editor.component.html',
    styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {
    projects: Project[] = [];
    projectForm: FormGroup;
    isEditing = false;
    currentProjectId: number | null = null;
    formSubmitted = false;
    successMessage = '';
    errorMessage = '';

    constructor(
        private fb: FormBuilder,
        private projectService: ProjectService
    ) {
        this.projectForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            image: ['', [Validators.required]],
            technologies: ['', [Validators.required]],
            liveUrl: ['', [Validators.required]],
            githubUrl: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects(): void {
        this.projectService.getProjects().subscribe({
            next: (projects) => {
                this.projects = projects;
            },
            error: (err) => {
                console.error('Error loading projects:', err);
                this.errorMessage = 'Failed to load projects. Please try again.';
            }
        });
    }

    onSubmit(): void {
        this.formSubmitted = true;

        if (this.projectForm.invalid) {
            return;
        }

        const projectData = this.projectForm.value;

        // Convert comma-separated technologies to array
        if (typeof projectData.technologies === 'string') {
            projectData.technologies = projectData.technologies
                .split(',')
                .map((tech: string) => tech.trim())
                .filter((tech: string) => tech);
        }

        if (this.isEditing && this.currentProjectId) {
            // Update existing project
            this.projectService.updateProject({
                ...projectData,
                id: this.currentProjectId
            }).subscribe({
                next: () => {
                    this.handleSuccess('Project updated successfully!');
                    this.loadProjects();
                },
                error: (err) => {
                    console.error('Error updating project:', err);
                    this.errorMessage = 'Failed to update project. Please try again.';
                }
            });
        } else {
            // Add new project
            this.projectService.addProject({
                ...projectData,
                id: Date.now() // Simple ID generation for demo
            }).subscribe({
                next: () => {
                    this.handleSuccess('Project added successfully!');
                    this.loadProjects();
                },
                error: (err) => {
                    console.error('Error adding project:', err);
                    this.errorMessage = 'Failed to add project. Please try again.';
                }
            });
        }
    }

    editProject(project: Project): void {
        this.isEditing = true;
        this.currentProjectId = project.id;

        // Convert technologies array to comma-separated string for form
        const technologiesString = project.technologies.join(', ');

        this.projectForm.setValue({
            title: project.title,
            description: project.description,
            image: project.image,
            technologies: technologiesString,
            liveUrl: project.liveUrl,
            githubUrl: project.githubUrl
        });
    }

    deleteProject(projectId: number): void {
        if (confirm('Are you sure you want to delete this project?')) {
            this.projectService.deleteProject(projectId).subscribe({
                next: () => {
                    this.handleSuccess('Project deleted successfully!');
                    this.loadProjects();
                },
                error: (err) => {
                    console.error('Error deleting project:', err);
                    this.errorMessage = 'Failed to delete project. Please try again.';
                }
            });
        }
    }

    resetForm(): void {
        this.projectForm.reset();
        this.isEditing = false;
        this.currentProjectId = null;
        this.formSubmitted = false;
    }

    private handleSuccess(message: string): void {
        this.successMessage = message;
        this.errorMessage = '';
        this.resetForm();

        // Clear success message after 3 seconds
        setTimeout(() => {
            this.successMessage = '';
        }, 3000);
    }
}