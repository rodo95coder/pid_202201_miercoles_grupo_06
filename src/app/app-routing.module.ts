import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistraDepartamentoComponent } from './components/registra-departamento/registra-departamento.component';
import { RegistraEdificioComponent } from './components/registra-edificio/registra-edificio.component';
import { RegistraMascotaComponent } from './components/registra-mascota/registra-mascota.component';
import { RegistraPropietarioComponent } from './components/registra-propietario/registra-propietario.component';
import { RegistraVisitanteComponent } from './components/registra-visitante/registra-visitante.component';

const routes: Routes = [
  {path:"registraDepartamento", component:RegistraDepartamentoComponent},
  {path:"registraEdificio",component:RegistraEdificioComponent},
  {path:"registraPropietario",component:RegistraPropietarioComponent},
  {path:"registraMascotas",component:RegistraMascotaComponent},
  {path:"registraVisitante",component:RegistraVisitanteComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
