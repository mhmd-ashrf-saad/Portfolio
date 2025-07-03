import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.loginError = '';
    
    const { username, password } = this.loginForm.value;
    
    this.authService.login(username, password).subscribe({
      next: (isValid) => {
        this.isLoading = false;
        if (isValid) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.loginError = 'Invalid username or password';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.loginError = 'An error occurred. Please try again.';
        console.error('Login error:', err);
      }
    });
  }
}