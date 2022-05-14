import { Component, OnInit } from '@angular/core';
import { Edificio } from 'src/app/models/edificio.model';
import { EdificioService } from 'src/app/services/edificio.service';

@Component({
  selector: 'app-registra-edificio',
  templateUrl: './registra-edificio.component.html',
  styleUrls: ['./registra-edificio.component.css']
})
export class RegistraEdificioComponent implements OnInit {

  edificio:Edificio ={};

  constructor(private edificioService:EdificioService) {

    

   }

  insertaEdificio(){
    this.edificioService.insertaEdificio(this.edificio).subscribe(
     (x) => alert(x.mensaje)
    );
  }

  ngOnInit(): void {
  }

}
