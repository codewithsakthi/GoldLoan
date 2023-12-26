// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public bankname ="";
  constructor() {
    // Retrieve authentication status from localStorage on service instantiation
    this.isAuthenticated = !!localStorage.getItem('authToken');
  }

  login(username: string, password: string,bankname:string): boolean {
    // Your authentication logic here
    const isAuthenticated = username.trim() == 'Arun' && password.trim() == '1234';
    this.bankname=bankname;
    if (isAuthenticated) {
      localStorage.setItem('authToken', 'yourAuthToken'); // Replace with a real authentication token
      this.isAuthenticated = true;
    }

    return this.isAuthenticated;
  }

  logout(): void {
    // Clear authentication status from localStorage
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
