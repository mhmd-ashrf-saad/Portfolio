import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private readonly STORAGE_KEY = 'portfolio_auth';
  private readonly ADMIN_USERNAME = 'admin';
  private readonly ADMIN_PASSWORD = 'admin123';

  constructor() {
    // Check if user is already logged in
    this.isAuthenticatedSubject.next(this.checkStoredAuth());
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulate API call with delay
    return of(username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD)
      .pipe(
        delay(800), // Simulate network delay
        tap(isValid => {
          if (isValid) {
            this.isAuthenticatedSubject.next(true);
            localStorage.setItem(this.STORAGE_KEY, 'true');
          }
        })
      );
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  private checkStoredAuth(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) === 'true';
  }
}