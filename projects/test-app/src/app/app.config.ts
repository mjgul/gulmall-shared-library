import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  
  providers: [HttpClient,provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
