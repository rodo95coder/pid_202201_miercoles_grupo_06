import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';

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
  {path:"registraCliente", component:RegistraClienteComponent },

  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
