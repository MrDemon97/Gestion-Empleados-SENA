import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados = [];
  }

  getEmpleados() {
    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleado: Empleado) {
    return this.http.post(this.URL_API, Empleado);
  }

  putEmpleado(empleado: Empleado): Observable<any> {
    return this.http.put<any>(`${this.URL_API}/${empleado._id}`, empleado);
  }
  

  deleteEmpleado(_id: string) {
    // Solo se necesita el id, no todo lo del empleado

    return this.http.delete(this.URL_API + `/${_id}`); // utilizamos el método delete
  }
}
