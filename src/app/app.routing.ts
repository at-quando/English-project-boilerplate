import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { authRoutes } from './auth/auth.routing';
import { globalRoutes } from './global/global.routing';
import { accountRoutes } from './account/account.routing';

const routes: Routes = [
  ...authRoutes,
  ...globalRoutes,
  ...accountRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
