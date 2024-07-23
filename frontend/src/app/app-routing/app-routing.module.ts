import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from '../components/empleados/empleados.component';

//import { AppRoutingModule } from './app-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent },  
  { path: '**', redirectTo: '/empleados' } // Manejo de rutas no encontradas
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
