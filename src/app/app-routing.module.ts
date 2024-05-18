import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ComponentPipeComponent } from './components/component-pipe/component-pipe.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { PadreComponent } from './components/padre/padre.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PermisionComponent } from './components/permision/permision.component';
import { authGuard } from './guards/auth.guard';
import { RutaHijaComponent } from './components/ruta-hija/ruta-hija.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'servicio-componentes', component: AddMessageComponent},
  {path: 'servicio-HTTP', component: CiudadesComponent},
  {path: 'pipe', component: ComponentPipeComponent},
  {path: 'formulario-template/:id', component: FormularioTemplateComponent},
  {path: 'formulario-reactive', component: FormularioReactivoComponent},
  {path: 'comunicacion-padre-hijo', component: PadreComponent},
  {path: 'permisos', component: PermisionComponent, canActivate: [authGuard], children:[
    {path: 'rutaHija', component: RutaHijaComponent}
  ]},
  {path: '**', component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
