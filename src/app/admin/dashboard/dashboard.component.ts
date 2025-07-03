import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProjectEditorComponent } from "../project-editor/project-editor.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, ProjectEditorComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    activeTab = 'projects';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Any initialization logic
    }

    setActiveTab(tab: string): void {
        this.activeTab = tab;
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/admin/login']);
    }
}