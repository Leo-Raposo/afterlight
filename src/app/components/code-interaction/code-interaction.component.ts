import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Adicione essa importação
import { MonacoEditorComponent } from '../monaco-editor/monaco-editor.component';
import { CodeSubmissionService } from '../../services/code-submission.service';

@Component({
  selector: 'app-code-interaction',
  standalone: true,
  imports: [MonacoEditorComponent],
  templateUrl: './code-interaction.component.html',
  styleUrls: ['./code-interaction.component.css']
})
export class CodeInteractionComponent {
  @ViewChild(MonacoEditorComponent) monacoEditor!: MonacoEditorComponent;
  codeText: string = '';
  userName: string = '';
  exercise: string = '';
  language: string = '';

  constructor(
    private codeSubmissionService: CodeSubmissionService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
      this.exercise = params['exercise'];
      this.language = params['language'];
    });
  }

  async submitCode(): Promise<void> {
    this.codeText = this.monacoEditor.getValue();
    
    console.log('Usuario:', this.userName);
    console.log('Nome do Exercicio:', this.exercise);
    console.log('Linguagem:', this.language);
    console.log('Código capturado:', this.codeText);

    try {
      const response = await this.codeSubmissionService.submitCode(
        this.userName,            // Nome do usuário capturado da URL
        this.exercise,    // Nome do exercício capturado da URL
        this.language,        // Linguagem
        this.codeText             // Código capturado
      );
      console.log('Resposta do servidor:', response);
    } catch (error) {
      console.error('Erro ao enviar o código:', error);
    }
  }
}
