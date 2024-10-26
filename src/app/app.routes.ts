import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { CodePageComponent } from './pages/code-page/code-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'signin', component: SigninComponent, data: { animation: 'SigninPage' } },
  { path: 'signup', component: SignupComponent, data: { animation: 'SignupPage' } },
  { path: 'code-page', component: CodePageComponent, data: { animation: 'CodePage' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

