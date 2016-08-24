import { bootstrap } from '@angular/platform-browser-dynamic';

import 'jquery/jquery.js';
import 'semantic-ui-css/semantic.js';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
