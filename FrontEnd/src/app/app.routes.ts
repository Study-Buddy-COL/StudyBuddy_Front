import { Routes } from '@angular/router';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';

export const routes: Routes = [

  { path: '', loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES) },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'overview', loadChildren: () => import('./features/dashboard/dashboard.routes').then( m => m.DASHBOARD_ROUTES) },
  { path: 'space-repetition', loadChildren: () => import('./features/space-repetition/space-repetition.routes').then(m => m.SPACE_REPETITION_ROUTES) }

];
