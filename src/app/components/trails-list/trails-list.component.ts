import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trails-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './trails-list.component.html',
  styleUrls: ['./trails-list.component.css']
})
export class TrailsList {
  exercises = [
    { id: 1, title: 'Exercise 1 - Hello World', completed: true },
    { id: 2, title: 'Exercise 2 - Cook Your Lasagna', completed: false },
    { id: 3, title: 'Exercise 3 - Annalyn\'s Infiltration', completed: false },
    { id: 4, title: 'Exercise 4 - Bird Watcher', completed: false },
    { id: 5, title: 'Exercise 5 - Karl\'s Languages', completed: false },
    { id: 6, title: 'Exercise 6 - Calculator Conundrum', completed: false },
    { id: 7, title: 'Exercise 7 - Squeaky Clean', completed: false },
    { id: 8, title: 'Exercise 8 - Elon\'s Toy Car', completed: false },
  ];

  constructor(private router: Router) { }

  navigateToCodePage(exerciseId: number): void {
    this.router.navigate(['/code-page'], { queryParams: { exerciseId } });
  }
}
