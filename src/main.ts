import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';

import { BadhanWebAppComponent, environment } from './app/';
import { AUTH_PROVIDERS, FIREBASE_APP_PROVIDERS } from './app/auth/shared/index';
import { StaticDataService } from './app/shared/static-data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(BadhanWebAppComponent,[
  ROUTER_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  AUTH_PROVIDERS,
  StaticDataService 
]);

