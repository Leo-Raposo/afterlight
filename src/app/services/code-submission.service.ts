// code-submission.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CodeSubmissionService {
  private baseUrl = 'http://ec2-98-81-234-41.compute-1.amazonaws.com';

  async submitCode(userName: string, exercise: string, language: string, codeText: string): Promise<any> {
    const url = `${this.baseUrl}/test`;
    const body = {
      userName,
      exercise,
      language,
      codeText
    };

    console.log("Enviando payload:", JSON.stringify(body)); // Log para verificar o payload

    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar o código:', error);
      throw error;
    }
  }
}
