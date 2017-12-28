import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/module/shared.module';
// import { UrlSecurePipe } from '../../shared/pipe/url/url.secure.pipe';
// import { SelectModule } from 'ng2-select';
// import { DropdownModule, AutoCompleteModule, MultiSelectModule, CalendarModule, FileUploadModule } from 'primeng/primeng';
import { IntroComponent } from './intro.component';

const _routes: Routes = [
  {
    path: '',
    component: IntroComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    // DropdownModule,
    // AutoCompleteModule,
    // MultiSelectModule,
    // SelectModule,
    // CalendarModule,
    // FileUploadModule,
    RouterModule.forChild(_routes)
  ],
  declarations: [IntroComponent]
})

export class IntroModule { }
