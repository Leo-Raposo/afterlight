import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ObserversModule } from '@angular/cdk/observers';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { DashboardLayout } from './pages/dashboard-layout/dashboard-layout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrailsComponent } from "./pages/trails/trails.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ObserversModule, SigninComponent, SignupComponent, HomeComponent, CodePageComponent, DashboardLayout, TrailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':leave', [
          animate('500ms ease', style({ transform: 'scale(0.8)', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'scale(1.1)', opacity: 0 }),
          animate('500ms ease', style({ transform: 'scale(1)', opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Afterlight';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}
