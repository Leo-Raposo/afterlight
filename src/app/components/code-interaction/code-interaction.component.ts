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
  code: string = '';
  user: string = '';
  exerciseName: string = '';
  language: string = '';

  constructor(
    private codeSubmissionService: CodeSubmissionService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.user = params['userName'];
      this.exerciseName = params['exercise'];
      this.language = params['language'];
    });
  }

  async submitCode(): Promise<void> {
    this.code = this.monacoEditor.getValue();
    
    console.log('Usuario:', this.user);
    console.log('Nome do Exercicio:', this.exerciseName);
    console.log('Linguagem:', this.language);
    console.log('Código capturado:', this.code);

    try {
      const response = await this.codeSubmissionService.submitCode(
        this.user,            // Nome do usuário capturado da URL
        this.exerciseName,    // Nome do exercício capturado da URL
        this.language,        // Linguagem
        this.code             // Código capturado
      );
      console.log('Resposta do servidor:', response);
    } catch (error) {
      console.error('Erro ao enviar o código:', error);
    }
  }
}
