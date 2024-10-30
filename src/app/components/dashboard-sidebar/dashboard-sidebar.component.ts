import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface UserProfile {
  name: string;
  role: string;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebar {
  userProfile: UserProfile = {
    name: 'John Carter',
    role: 'Account settings'
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToTrails() {
    this.router.navigate(['/trails']);
  }

  navigateToBadges() {
    this.router.navigate(['/badges']);
  }

  navigateToRank() {
    this.router.navigate(['/rank']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
