import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistraEdificioComponent } from './components/registra-edificio/registra-edificio.component';
import { RegistraDepartamentoComponent } from './components/registra-departamento/registra-departamento.component';
import { RegistraMascotaComponent } from './components/registra-mascota/registra-mascota.component';
import { RegistraPropietarioComponent } from './components/registra-propietario/registra-propietario.component';
import { RegistraVisitanteComponent } from './components/registra-visitante/registra-visitante.component';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistraEdificioComponent,
    RegistraDepartamentoComponent,
    RegistraMascotaComponent,
    RegistraPropietarioComponent,
    RegistraVisitanteComponent,
    RegistraClienteComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
  

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
