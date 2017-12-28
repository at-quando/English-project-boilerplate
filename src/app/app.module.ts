import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { UserDetailsComponent } from './account/user/user-details/user-details.component';
import { UserAchievementComponent } from './account/user/user-achievement/user-achievement.component';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';
import { CoreModule } from './core/module/core.module';
import { NavbarModule } from './shared/layout/navbar/navbar.module';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * configure for AuthHttp with JWT
 */
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    noTokenScheme: true,
    noJwtError: true,
    noClientCheck: true,
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [
      {'Accept': 'application/json'},
      {'Content-Type': 'application/json'}
    ],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserDetailsComponent,
    UserAchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    CoreModule.forRoot(),
    NgbModule.forRoot(),
    AuthModule,
    GlobalModule,
    NavbarModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
