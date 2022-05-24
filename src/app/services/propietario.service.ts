import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Propietario } from '../models/propietario.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlPropietario = AppSettings.API_ENDPOINT+ '/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http:HttpClient) { }

  listaPropietarios():Observable<Propietario[]> {
    return this.http.get<Propietario[]>(baseUrlUtil+"/listapripietario")
  }

  insertaPropietario(propietario:Propietario):Observable<any>{
    return this.http.post(baseUrlPropietario,propietario);
  }
}
