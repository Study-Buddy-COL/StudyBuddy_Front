import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES) },
  { path: 'get-started', loadChildren: () => import('./features/auth/auth.routes').then( m => m.AUTH_ROUTES) },
  { path: 'overview', loadChildren: () => import('./features/dashboard/dashboard.routes').then( m => m.DASHBOARD_ROUTES) },
  { path: 'space-repetition', loadChildren: () => import('./features/space-repetition/space-repetition.routes').then(m => m.SPACE_REPETITION_ROUTES) }


];
