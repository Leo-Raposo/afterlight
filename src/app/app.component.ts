import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Import RouterModule
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SliderComponent } from './components/home/home.component'; // Import any other components you need

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Ensure RouterOutlet is imported
    RouterModule, // Import RouterModule to handle routing
    SigninComponent, // Import your standalone components
    SignupComponent,
    SliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afterlight';
}
