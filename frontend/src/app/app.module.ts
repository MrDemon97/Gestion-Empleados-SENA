import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@NgModule({
    declarations: [ 
        AppComponent,
        EmpleadosComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClient
    ],

    providers: [],
    bootstrap: [AppComponent]

})

export class AppModule { }
