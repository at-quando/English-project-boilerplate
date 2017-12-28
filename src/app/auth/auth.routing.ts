import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthGuard } from '../core/service/auth/auth-guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'signin',
        loadChildren: 'app/auth/signin/signin.module#SigninModule'
      }
    ]
  }
];
