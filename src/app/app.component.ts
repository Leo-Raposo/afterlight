import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SliderComponent } from './components/home/home.component';
import { CodePageComponent } from './components/code-page/code-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SigninComponent,
    SignupComponent,
    SliderComponent,
    CodePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afterlight';
}
