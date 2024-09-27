import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'https://your-api-base-url.com',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // GET request example
  async getRequest(endpoint: string) {
    try {
      const response = await this.axiosClient.get(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // POST request example
  async postRequest(endpoint: string, data: any) {
    try {
      const response = await this.axiosClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Generic error handling
  private handleError(error: any) {
    console.error('Axios request error:', error);
    throw error;
  }
}
