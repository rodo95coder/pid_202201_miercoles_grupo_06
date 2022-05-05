import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Edificio } from '../models/edificio.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+"/util";
const baseUrlEdificio = AppSettings.API_ENDPOINT+ '/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http:HttpClient) { }

  listaEdificios():Observable<Edificio[]> {
    return this.http.get<Edificio[]>(baseUrlUtil+"/listaEdificio")
  }

  insertaEdificio(edificio:Edificio):Observable<any>{
    return this.http.post(baseUrlEdificio,edificio);
  }
}
