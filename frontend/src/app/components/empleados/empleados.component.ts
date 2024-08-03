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
  imports: [CommonModule, FormsModule],
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];

  //creamos un bollean que me permite saber si estoy editando o creando
  isEditing: boolean = false;

  //Ccreamos una variable para almacenar el id del empleado a editar
  selectedEmpleadoId: string | null = null;

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    // Al inicar reseteamos el formulario y optenemos los datos de empleados
    this.resetForm();
    this.getEmpleados();
  }

  getEmpleados() {
    //! Subscribirse al observabke devuelto por getEmpleados
    this.empleadoService.getEmpleados().subscribe(
      (data: any) => {
        this.empleados = data;
      },
      (error) => {
        M.toast({ html: 'Error al cargar empleados' });
      }
    );
  }

  agregarEmpleado(form?: NgForm) {
    // Si el formulario es no valido 
    if (!form?.valid) {
      M.toast({ html: 'Todos los campos son requeridos' });
      return;
    }
    // Deconstruccion  [Extraer los valores de un objeto y asignarlos a varaibles individuales]
    const { name, position, office, salary } = form?.value;

    //! Revisamos en el formulario si salario es null  o que no sea menor a 0

    if (salary == null){
      M.toast({ html: 'Salario no puede estar vacio' });
      return;
    }else if (salary <= 0){
      M.toast({ html: 'El salario debe ser mayor a 0' });
      return;
    }

    // Verifica si alguno de los campos obligatorios está vacío
    if (!name.trim() || !position.trim() || !office.trim())  {
      //trim elimina los espacios en blanco al principio y al final de una cadena de texto
      M.toast({ html: 'Todos los campos deben estar llenos' });
      return;
    }
    console.log('Datos del formulario', form?.value)

    // Verifica si estamos en modo edición
    if (this.isEditing) {
      // Si estamos en modo edición, aseguramos que el _id esté presente
      if (!this.selectedEmpleadoId) {
        M.toast({
          html: 'Error: El ID del empleado es necesario para la actualización',
        });
        return;
      }

      //Crea un objeto con el id del empleado a editar y los datos del formulario
      const empleadoData: Empleado = {_id: this.selectedEmpleadoId, ...form?.value}

      this.empleadoService.putEmpleado(empleadoData).subscribe(
        (res) => {
          M.toast({ html: 'Empleado actualizado con éxito' });
          this.resetForm(form);
          this.getEmpleados();
        },
        (error) => {
          M.toast({ html: 'Error al actualizar empleado' });
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
          M.toast({ html: 'Error al crear empleado' });
        }
      );
    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = { ...empleado };
    this.isEditing = true;
    
    // Guarda el id del empleadoa editar
    this.selectedEmpleadoId = empleado._id;
    
    // Desplazar hacia el formulario
    document.querySelector('.card')?.scrollIntoView({ behavior: 'smooth' });
  }

  eliminarEmpleado(_id: string) {
    if (confirm('¿Esta seguro de que desea eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(_id).subscribe(
        (res) => {
          M.toast({ html: 'Empleado eliminado con exito' });
          this.getEmpleados();
        },
        (error) => {
          M.toast({ html: 'Error al eliminar empleado' });
        }
      );
    } else {
      M.toast({ html: 'Eliminacion Cancelada' });
      this.getEmpleados();
    }
  }

  resetForm(form?: NgForm) {
    // Limpiar el formulario, recibe un formulario como parametro

    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
      //No aseguramos de que el limpiar el formulario se añada un 0 a salario y no se convierta en 
      //indefinido
      this.selectedEmpleadoId = null; // Reestablesemos el guardador de ids
      this.isEditing = false;
    }
  }
}
