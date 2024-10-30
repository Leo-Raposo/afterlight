import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent {
  @Input() imageUrl: string = 'https://cdn.builder.io/api/v1/image/assets/488eda03dadc464d9f061e6f2fbf3e3d/2cd136655ce663ff3a3a2c758ab1ea1eb27971ca1a83b8cf7ecacbfdaccf9555?apiKey=488eda03dadc464d9f061e6f2fbf3e3d&';
  @Input() imageAlt: string = '';

  constructor(private router: Router) { }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
