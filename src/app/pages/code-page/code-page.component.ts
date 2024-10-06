import { Component } from '@angular/core';
import { CodeInteractionComponent } from '../../components/code-interaction/code-interaction.component';
import { ChatInteractionComponent } from '../../components/chat-interaction/chat-interaction.component';
import { MonacoEditorComponent } from '../../components/monaco-editor/monaco-editor.component';

@Component({
  selector: 'app-code-page',
  standalone: true,
  imports: [CodeInteractionComponent, ChatInteractionComponent, MonacoEditorComponent],
  templateUrl: './code-page.component.html',
  styleUrl: './code-page.component.css'
})
export class CodePageComponent {

}
