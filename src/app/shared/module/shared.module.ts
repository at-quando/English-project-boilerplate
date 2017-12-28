import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../layout/breadcrumb/breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    BreadcrumbModule
  ],
  declarations: [
  ],
  exports: [
    BreadcrumbModule,
    RouterModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
