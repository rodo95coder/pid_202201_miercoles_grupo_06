import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Mascota } from '../models/mascota.model';


const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlMascota = AppSettings.API_ENDPOINT+ '/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }

  insertaMascota(mascota:Mascota):Observable<any>{
    return this.http.post(baseUrlMascota,mascota);
  }
}
