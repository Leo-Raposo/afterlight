import { Component } from '@angular/core';
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
}
