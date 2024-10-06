import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatInteractionComponent } from './components/chat-interaction/chat-interaction.component';
import { CodeInteractionComponent } from './components/code-interaction/code-interaction.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'code-page', component: CodePageComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
