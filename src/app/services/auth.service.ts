import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';

  constructor() { }

  async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    try {
      const response = await axios.get(`${this.apiUrl}/auth/is-authenticated`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.status === 200;
    } catch (error) {
      console.error('Token validation failed:', error);
      localStorage.removeItem('token');
      return false;
    }
  }

  async login(credentials: { email: string, password: string }): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/api/users/login`, credentials);
      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error.response || error);
      throw error;
    }
  }

  async register(user: { username: string, email: string, password: string }): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/api/users/register`, user);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  }

  async logout(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post(`${this.apiUrl}/auth/logout`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      localStorage.removeItem('token');
    } catch (error: any) {
      console.error('Logout failed:', error.response || error);
      throw error;
    }
  }
}
