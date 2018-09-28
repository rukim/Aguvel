import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarDatosComponent} from './agregar-datos/agregar-datos.component';
import {AppComponent} from './app.component';



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'datos', component: AgregarDatosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
