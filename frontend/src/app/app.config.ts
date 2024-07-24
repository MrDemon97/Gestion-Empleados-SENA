/* import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
 */
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar esto
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', redirectTo: '/empleados', pathMatch: 'full' },
        { path: 'empleados', component: EmpleadosComponent },
        { path: '**', redirectTo: '/empleados' }
      ])
    )
  ]
};
