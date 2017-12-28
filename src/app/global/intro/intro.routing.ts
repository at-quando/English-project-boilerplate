import { Routes } from '@angular/router';

export const introRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/global/intro/intro.module#IntroModule'
  }
];
