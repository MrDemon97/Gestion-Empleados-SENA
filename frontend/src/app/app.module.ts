import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@NgModule({
    declarations: [
        // Declara los componentes que pertenecen a este modulo
        AppComponent, // Coponente raiz de la aplicación
        EmpleadosComponent
    ],

    imports: [
        //importa los modulos que este módulo necesita
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],

    providers: [],
    bootstrap: [AppComponent] // Define el componente raiz que se cargará al iniciar la app

})

export class AppModule { }
