import { Component } from '@angular/core';
import { CodeInteractionComponent } from '../code-interaction/code-interaction.component';
import { ChatInteractionComponent } from '../chat-interaction/chat-interaction.component';

@Component({
  selector: 'app-code-page',
  standalone: true,
  imports: [CodeInteractionComponent, ChatInteractionComponent],
  templateUrl: './code-page.component.html',
  styleUrl: './code-page.component.css'
})
export class CodePageComponent {

}
