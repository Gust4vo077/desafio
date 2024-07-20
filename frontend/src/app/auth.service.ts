import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor() {
    const savedCredentials = localStorage.getItem('token');

    if (savedCredentials) {
      this.token = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials() {
    return this.token;
  }
}