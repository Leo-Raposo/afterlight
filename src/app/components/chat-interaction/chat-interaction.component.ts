import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sendChatMessage } from '../../services/chat.service';

@Component({
  selector: 'app-chat-interaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-interaction.component.html',
  styleUrl: './chat-interaction.component.css'
})
export class ChatInteractionComponent implements AfterViewChecked, OnInit {
  newMessage: string = '';
  messages: { sender: string, content: string }[] = [];

  @ViewChild('chatMessagesContainer') private chatMessagesContainer!: ElementRef;

  ngOnInit() {
    // Método que será executado quando o componente for carregado
    this.initializeChat();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // Método que queremos executar ao carregar a página
  private initializeChat(): void {
    this.messages.push({
      sender: 'assistant',
      content: 'Bem-vindo ao chat! Como posso ajudar?'
    });
  }

  async submitMessage(): Promise<void> {
    const sendingMessage: string = this.newMessage;
    // Limpa o campo de entrada
    this.newMessage = '';
    if (sendingMessage.trim()) {
      // Adiciona a mensagem do usuário ao array de mensagens
      this.messages.push({ sender: 'user', content: sendingMessage });

      // Envia a mensagem para a API Hugging Face
      try {
        const response = await sendChatMessage(this.messages);
        this.messages.push({ sender: 'assistant', content: response }); // Adiciona a resposta do assistente
      } catch (error) {
        console.error('Failed to send message:', error);
      }

      
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Failed to scroll to bottom:', err);
    }
  }
}
