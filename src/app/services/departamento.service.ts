import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Departamento } from '../models/departamento.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlDepartamento = AppSettings.API_ENDPOINT+ '/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { 
    
  }
  listaDepartamentos():Observable<Departamento[]> {
    return this.http.get<Departamento[]>(baseUrlUtil+"/listadepartamento")
  }

  insertaDepartamento(departamento:Departamento):Observable<any>{
    return this.http.post(baseUrlDepartamento,departamento);
  }
}
