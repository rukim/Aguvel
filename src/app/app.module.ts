import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgregarDatosComponent } from './agregar-datos/agregar-datos.component';
import { DisenoComponent } from './interfaz/diseno/diseno.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarDatosComponent,
    DisenoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
