import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarDatosComponent} from './agregar-datos/agregar-datos.component';
<<<<<<< HEAD
import {LoginComponent } from './login/login.component';
=======
import {LoginComponent} from './login/login.component';
>>>>>>> fb681cd1c2f510e0c314dec3c0deb9e84f62c08c
import {AgregarPerfilesComponent} from './agregar-perfiles/agregar-perfiles.component';

/* El primer path, cuyas comillas estan vacias, debe ser asi para indicar que es la ventana default */
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
