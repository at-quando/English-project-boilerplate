import { NgModule } from '@angular/core';
import { SharedModule } from '../../module/shared.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
