import { Routes } from '@angular/router';
// import { FeatureComponent } from './feature.component';
import { GlobalComponent } from './global.component';
import { introRoutes } from './intro/intro.routing';
import { homeRoutes } from './home/home.routing';
// import { dashboardRoutes } from './dashboard/dashboard.routing';
// import { serviceRoutes } from './service/service.routing';
// import { utilitiesRoutes } from './utilities/utilities.routing';

export const globalRoutes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      ...introRoutes,
      ...homeRoutes
    ]
  }
];
