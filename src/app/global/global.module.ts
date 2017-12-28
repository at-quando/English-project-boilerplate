import { NgModule } from '@angular/core';
import { GlobalComponent } from './global.component';
import { CoreModule } from '../core/module/core.module';
// import { HeaderModule } from '../shared/layout/header/header.module';
// import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';
// import { FooterModule } from '../shared/layout/footer/footer.module';
import { Routes, RouterModule } from '@angular/router';
// import { CustomDialogModule } from '../shared/partial/dialog/dialog.module';
// import { ErrorModule } from '../shared/partial/error/error.module';
// import { ProgressBarModule } from '../shared/partial/progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    GlobalComponent
  ],
  imports: [
    CoreModule,
    // HeaderModule,
    // SidebarModule,
    // FooterModule,
    RouterModule,
    // CustomDialogModule,
    // ErrorModule,
    // ProgressBarModule
  ]
})

export class GlobalModule {}
