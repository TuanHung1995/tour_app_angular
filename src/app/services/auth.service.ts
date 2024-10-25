import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Jwt } from '../models/jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/api/v1/auth'; // URL to auth api

  constructor(private http: HttpClient) {}

  private user: any; // User data

  login(credentials: { email: string; password: string }): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  // Store user data after login
  setUser(user: any): void {
    this.user = user;
    if(typeof window !== 'undefined') localStorage.setItem('user', JSON.stringify(user)); // Optional: Store in local storage
  }

  // Get user data
  getUser(): any {
    if (typeof window !== 'undefined') return this.user || JSON.parse(localStorage.getItem('user') || '{}');
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.getUser()?.id;
  }

  // Get user role
  getUserRole(): string {
    return this.getUser()?.role || '';
  }
}
