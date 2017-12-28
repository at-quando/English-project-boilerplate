import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/module/shared.module';
import { SigninComponent } from './signin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
