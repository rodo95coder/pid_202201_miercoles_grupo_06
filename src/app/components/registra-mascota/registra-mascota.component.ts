import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { Propietario } from 'src/app/models/propietario.model';
import { MascotaService } from 'src/app/services/mascota.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-registra-mascota',
  templateUrl: './registra-mascota.component.html',
  styleUrls: ['./registra-mascota.component.css']
})
export class RegistraMascotaComponent implements OnInit {

  propietarios:Propietario[]=[];

  mascota: Mascota = {
    propietario:{
      idpropietario: -1
    }
  };

  constructor(private propietarioService:PropietarioService,private mascotaService:MascotaService) { 
    this.propietarioService.listaPropietarios().subscribe(
      (x) => this.propietarios = x    
    );
  }
  insertaMascota(){
    this.mascotaService.insertaMascota(this.mascota).subscribe(
     (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
  }

}
