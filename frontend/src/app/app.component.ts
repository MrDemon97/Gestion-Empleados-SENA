import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true, //Indica que el componente es independiente y no necesita un módulo para funcionar.
  imports: [RouterOutlet, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion de empleados';
}
