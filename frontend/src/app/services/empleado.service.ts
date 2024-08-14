import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { catchError, Observable, throwError } from 'rxjs';

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

  /**
   * Obtiene todos los empleados de la API.
   * Maneja errores de la solicitud y los propaga como excepciones.
   */

  getEmpleados() {
    return this.http.get(this.URL_API).pipe(
      catchError(err => {
        return throwError (() => new Error('Error al cargar empleados'));
      })
    );
  }
 
  /**
   * Crea un nuevo empleado en la API.
   * Maneja errores de la solicitud y los propaga como excepciones.
   * @param empleado - El empleado a crear.
   */
  
  postEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado). pipe(
      catchError(err => {
        if(err.status === 400){
          return throwError(() => new Error('Empleado con los mismos datos ya existe'));
        }
        return throwError (() => new Error('Error al crear empleado'));
      })
    );
  }
  
  /**
  * Actualiza un empleado existente en la API.
  * Maneja errores de la solicitud y los propaga como excepciones.
  * @param empleado - El empleado con los datos actualizados.
  */

  putEmpleado(empleado: Empleado): Observable<any> {
    return this.http.put<any>(`${this.URL_API}/${empleado._id}`, empleado).pipe(
      catchError(err => {
        if(err.status === 400){
          return throwError(() => new Error('Empleado con los mismos datos ya existe'));
        }
        return throwError (() => new Error('Error al actualizar empleado'));
      })
    );
  }
  

  deleteEmpleado(_id: string) {
    // Solo se necesita el id, no todo lo del empleado
    return this.http.delete(this.URL_API + `/${_id}`).pipe(
      catchError(err => {
        return throwError (() => new Error('Error al eliminar empleado'));
      }) 
    ); 
  }
}
