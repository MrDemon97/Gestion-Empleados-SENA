import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';
import { CommonModule } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [CommonModule, FormsModule]
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  //creamos un bollean que me permite saber si estoy editando o creando
  isEditing: boolean = false;
  
  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.resetForm();
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data: any) => {
      this.empleados = data;;
    },
    (error) => {
      M.toast({ html: 'Error al cargar empleados'});
    }
   );
  }

  agregarEmpleado(form?: NgForm) {
    if (!form?.valid) {
      M.toast({ html: 'Todos los campos son requeridos' });
      return;
    }

    // Verifica si estamos en modo edición
    if (this.isEditing) {
      // Si estamos en modo edición, aseguramos que el _id esté presente
      if (!form?.value._id) {
        M.toast({ html: 'Error: El ID del empleado es necesario para la actualización' });
        return;
      }

      this.empleadoService.putEmpleado(form?.value).subscribe(
        (res) => {
          M.toast({ html: 'Empleado actualizado con éxito' });
          this.resetForm(form);
          this.getEmpleados();
        },
        (error) => {
          M.toast({ html: error });
        }
      );
    } else {
      // Si estamos en modo creación
      this.empleadoService.postEmpleado(form?.value).subscribe(
        (res) => {
          M.toast({ html: 'Empleado creado satisfactoriamente' });
          this.resetForm(form);
          this.getEmpleados();
        },
        (error) => {
          M.toast({ html: error });
        }
      );
    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = {...empleado};
    this.isEditing = true;
     // Desplazar hacia el formulario
     document.querySelector('.card')?.scrollIntoView({ behavior: 'smooth' });
  }

  eliminarEmpleado(_id: string) {
    if(confirm('¿Esta seguro de que desea eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(_id).subscribe((res) => {
        M.toast({ html: 'Empleado eliminado con exito'});
        this.getEmpleados();
      },
      (error) => {
        M.toast({ html: error });
      }
    );
    }else{
      M.toast({ html: 'Eliminacion Cancelada'});
      this.getEmpleados();
    }
  }

  resetForm(form?: NgForm) {
    // Limpiar el formulario, recibe un formulario como parametro

    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
      this.isEditing=false;
    }
  }
}
