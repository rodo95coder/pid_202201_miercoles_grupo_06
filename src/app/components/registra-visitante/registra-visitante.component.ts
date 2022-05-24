import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Estado } from 'src/app/models/estado.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EstadoService } from 'src/app/services/estado.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-registra-visitante',
  templateUrl: './registra-visitante.component.html',
  styleUrls: ['./registra-visitante.component.css']
})
export class RegistraVisitanteComponent implements OnInit {

  departamentos: Departamento[]=[];
  estados: Estado[]= [];
  visitante:Visitante={
    departamento:{
      iddepartamento:-1
    },
    estado:{
      idestado:-1
    }


  }

  constructor(private departamentoService:DepartamentoService,private estadoService:EstadoService,private visitanteService:VisitanteService) {

    this.departamentoService.listaDepartamentos().subscribe(
      (x) => this.departamentos = x    
    );
    this.estadoService.listaEstados().subscribe(
      (x) => this.estados = x
    );

   }

   insertaVisita(){
    this.visitanteService.insertaVisita(this.visitante).subscribe(
     (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
  }

}
