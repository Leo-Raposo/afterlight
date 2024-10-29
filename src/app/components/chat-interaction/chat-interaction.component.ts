import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-chat-interaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-interaction.component.html',
  styleUrls: ['./chat-interaction.component.css']
})
export class ChatInteractionComponent {
  messages: { sender: string, content: string, htmlContent?: SafeHtml }[] = [
    { sender: 'Lorem Ipsum', content: '### Markdown Header\nSome **bold text** and _italic text_.', htmlContent: '' },
    { sender: 'AfterLight', content: 'Here is a list:\n- Item 1\n- Item 2\n- Item 3', htmlContent: '' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.messages.forEach(message => {
      message.htmlContent = this.convertMarkdownToHtml(message.content);
    });
  }

  private async convertMarkdownToHtml(markdown: string): Promise<SafeHtml> {
    const html = await marked.parse(markdown);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
