import { Routes } from '@angular/router';
import { SpaceRepetitionComponent } from './modules/space-repetition/space-repetition.component';
import { MainComponent } from './modules/landing/components/main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent}, // Landing - Main
    {path: 'spaceRepetition', component: SpaceRepetitionComponent}, // Space repetition
];
