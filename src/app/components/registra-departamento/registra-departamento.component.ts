import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';

@Component({
  selector: 'app-registra-departamento',
  templateUrl: './registra-departamento.component.html',
  styleUrls: ['./registra-departamento.component.css']
})
export class RegistraDepartamentoComponent implements OnInit {

  edificios: Edificio[] = [];

  departamento: Departamento = {
    edificio:{
      idedificio: -1
    }
  };

  constructor( private edifcioService:EdificioService,private departamentoService:DepartamentoService) { 
    this.edifcioService.listaEdificios().subscribe(
      (x) => this.edificios = x    
    );

  }
  insertaDepartamento(){
    this.departamentoService.insertaDepartamento(this.departamento).subscribe(
     (x) => alert(x.mensaje)
    );
  }



  ngOnInit(): void {
  }


}
