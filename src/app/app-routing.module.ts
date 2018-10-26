import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarDatosComponent} from './agregar-datos/agregar-datos.component';
import {LoginComponent } from './login/login.component';
import {AgregarPerfilesComponent} from './agregar-perfiles/agregar-perfiles.component';

/* El primer path, cuyas comillas estan vacias, debe ser asi para indicar que es la ventana default */
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datos', component: AgregarDatosComponent},
  {path: 'añadirPerfiles', component: AgregarPerfilesComponent}
];


export const routing = RouterModule.forRoot(routes);
