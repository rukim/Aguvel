import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_directivos';
import { AuthGuard } from './_guardia';
import { JwtInterceptor, ErrorInterceptor } from './_ayudantes';
import { AlertService, AuthenticationService, UserService, AguaService } from './_servicios';
import { fakeBackendProvider } from './_ayudantes';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AgregarDatosComponent } from './agregar-datos/agregar-datos.component';
import { DisenoComponent } from './interfaz/diseno/diseno.component';
import { routing } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SlideMenuComponent } from './interfaz/slide-menu/slide-menu.component';
import { AgregarPerfilesComponent } from './agregar-perfiles/agregar-perfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarDatosComponent,
    DisenoComponent,
    LoginComponent,
    AlertComponent,
    SlideMenuComponent,
    AgregarPerfilesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    AguaService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
