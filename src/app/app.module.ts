import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PadreComponent } from './components/padre/padre.component';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ListMessageComponent } from './components/list-message/list-message.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { ComponentPipeComponent } from './components/component-pipe/component-pipe.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PermisionComponent } from './components/permision/permision.component';
import { RutaHijaComponent } from './components/ruta-hija/ruta-hija.component';



@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent,
    AddMessageComponent,
    ListMessageComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent,
    Pipe1Pipe,
    Pipe2Pipe,
    ComponentPipeComponent,
    CiudadesComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    PermisionComponent,
    RutaHijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
