import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpleadosComponent } from '../components/empleados/empleados.component';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent },
  // Puedes agregar más rutas aquí según necesites
  { path: '**', redirectTo: '/empleados' } // Manejo de rutas no encontradas
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
