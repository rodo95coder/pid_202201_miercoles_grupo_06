import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Estado } from '../models/estado.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+"/util";
const baseUrlEstado = AppSettings.API_ENDPOINT+ '/edificio';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http:HttpClient) { }

  listaEstados():Observable<Estado[]> {
    return this.http.get<Estado[]>(baseUrlUtil+"/listaEstado")
  }
}
