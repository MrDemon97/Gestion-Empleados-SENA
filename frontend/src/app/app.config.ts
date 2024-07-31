/* import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
 */



//USAMOS EL ENFOQUE BASADO EN MODULOS PUES EL TUTORIAL SE REALIZO CON
// UNA VERSION ANTERIOR DE ANGULAR

import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar esto
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
    )
  ]
};
