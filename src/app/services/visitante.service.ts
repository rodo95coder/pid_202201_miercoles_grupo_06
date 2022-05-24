import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Visitante } from '../models/visitante.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlVisitante = AppSettings.API_ENDPOINT+ '/visitante';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http:HttpClient) { }

  insertaVisita(visitante:Visitante):Observable<any>{
    return this.http.post(baseUrlVisitante,visitante);
  }
}
