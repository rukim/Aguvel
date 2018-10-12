import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_directivos';
import { AuthGuard } from './_guardia';
import { JwtInterceptor, ErrorInterceptor } from './_ayudantes';
import { AlertService, AuthenticationService, UserService } from './_servicios';
import { fakeBackendProvider } from './_ayudantes';

import { AppComponent } from './app.component';
import { AgregarDatosComponent } from './agregar-datos/agregar-datos.component';
import { DisenoComponent } from './interfaz/diseno/diseno.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { SlideMenuComponent } from './interfaz/slide-menu/slide-menu.component';
=======
import { AgregarPerfilesComponent } from './agregar-perfiles/agregar-perfiles.component';
>>>>>>> 0fe4c25293c72bffb9ef79358571b5698bd85449

@NgModule({
  declarations: [
    AppComponent,
    AgregarDatosComponent,
    DisenoComponent,
    LoginComponent,
    AlertComponent,
<<<<<<< HEAD
    SlideMenuComponent
=======
    AgregarPerfilesComponent
>>>>>>> 0fe4c25293c72bffb9ef79358571b5698bd85449
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
