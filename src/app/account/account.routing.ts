import { Routes } from '@angular/router';
// import { FeatureComponent } from './feature.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import { AuthGuard } from '../core/service/auth/auth-guard';
// import { dashboardRoutes } from './dashboard/dashboard.routing';
// import { serviceRoutes } from './service/service.routing';
// import { utilitiesRoutes } from './utilities/utilities.routing';

export const accountRoutes: Routes = [
  {
    path: 'account',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  }
];
