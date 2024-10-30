import { Component } from '@angular/core';
import { HighlightCodePipe } from '../../pipe/highlight-code.pipe';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from '../monaco-editor/monaco-editor.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-interaction',
  standalone: true,
  imports: [HighlightCodePipe, CommonModule, MonacoEditorComponent, MiniCardComponent],
  templateUrl: './code-interaction.component.html',
  styleUrls: ['./code-interaction.component.css']
})
export class CodeInteractionComponent {
  showPopup: boolean = false;

  constructor(private router: Router) { }

  submitCode(): void {
    this.showPopup = true;
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
