import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarDatosComponent} from './agregar-datos/agregar-datos.component';
import {LoginComponent } from './login/login.component';
import {AgregarPerfilesComponent} from './agregar-perfiles/agregar-perfiles.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datos', component: AgregarDatosComponent},
  {path: 'añadirPerfiles', component: AgregarPerfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
