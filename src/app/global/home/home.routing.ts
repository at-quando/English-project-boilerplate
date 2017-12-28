import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/global/home/home.module#HomeModule'
  }
];
