import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { I18nService } from './core/service/i18n/i18n.service';

// Define list language for app
I18nService.SUPPORTED_LANGUAGES = [
  { code: 'en', title: 'English' },
  { code: 'ja', title: 'Japanese' },
  { code: 'vi', title: 'Vietnamese' }
];

// Set type active for current language
I18nService.ACTIVE_TYPE = 'selected';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(  private renderer: Renderer,
                private router: Router, @Inject(DOCUMENT, )
                private document: any,
                private element: ElementRef,
                public location: Location,
                public i18n: I18nService) {}

  ngOnInit () {
      const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }
        this.navbar.sidebarClose();
      });
      this.renderer.listenGlobal('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
          // add logic
          navbar.classList.remove('navbar-transparent');
        } else {
          // remove logic
          navbar.classList.add('navbar-transparent');
        }
      });
      var ua = window.navigator.userAgent;
      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
      if (version) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');
      }
  }

  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if (titlee === 'signup' || titlee === 'nucleoicons') {
      return false;
    } else {
      return true;
    }
  }
}
