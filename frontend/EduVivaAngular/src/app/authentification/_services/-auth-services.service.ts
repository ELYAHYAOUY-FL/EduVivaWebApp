import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';
  private token: string | null = null;
  constructor(private http: HttpClient) {}

  register(userRegistrationData: any): Observable<any> {
    const registerUrl = `${this.apiUrl}/register`;
    return this.http.post(registerUrl, userRegistrationData);
  }

  authenticate(authenticationData: any): Observable<any> {
    const authenticateUrl = `${this.apiUrl}/authenticate`;
    return this.http.post(authenticateUrl, authenticationData);
  }

  refreshToken(): Observable<any> {
    const refreshTokenUrl = `${this.apiUrl}/refresh-token`;
    return this.http.post(refreshTokenUrl, {});
  }
  
  isLoggedIn(): boolean {
    return !!this.token; // Returns true if token exists, false otherwise
  }

  // Method to set the authentication token
  setToken(token: string): void {
    this.token = token;
    // You may want to save the token to localStorage or a secure storage method for persistence
  }

  // Method to get the authentication token
  getToken(): string | null {
    return this.token;
  }

  // Method to clear the authentication token (logout)
  logout(): void {
    this.token = null;
    // You may also want to clear the token from localStorage or any other storage method
  }

}