import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EmpleadoService} from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../../app/models/empleado';

declare var M: any;

@Component ({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls:['./empleados.component.css'],
    providers: [EmpleadoService]
})

export class EmpleadosComponent implements OnInit{
  resetForm: any;
  constructor(public empleadoService: EmpleadoService){}
  ngOnInit(): void {

  }

agregarEmpleado(form?:NgForm){
  this.empleadoService.PostEmpleado(form?.value)
  .subscribe(res =>{
    this.resetForm(form);
    M.toast({html:'GUARDADO SATISFACTORIAMENTE'});
    });
  }
}
