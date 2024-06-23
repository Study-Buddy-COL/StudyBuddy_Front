import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', loadChildren: () => import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES) },
  { path: 'space-repetition', loadChildren: () => import('./features/space-repetition/space-repetition.routes').then(m => m.SPACE_REPETITION_ROUTES) }

];
