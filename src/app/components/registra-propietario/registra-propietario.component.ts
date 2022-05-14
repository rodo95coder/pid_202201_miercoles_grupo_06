import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario.model'
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-registra-propietario',
  templateUrl: './registra-propietario.component.html',
  styleUrls: ['./registra-propietario.component.css']
})
export class RegistraPropietarioComponent implements OnInit {

  departamentos: Departamento[]=[];

propietario: Propietario = {
  departamento:{
    iddepartamento: -1
  }
};

  constructor( private departamentoService:DepartamentoService, private propietarioService:PropietarioService) { 
    this.departamentoService.listaDepartamentos().subscribe(
      (x) => this.departamentos = x    
    );
  }

  insertaPropietarios(){
    this.propietarioService.insertaPropietario(this.propietario).subscribe(
     (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
  }

}
