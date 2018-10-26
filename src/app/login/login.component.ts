import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, UserService } from '../_servicios';
import { User } from '../_modelos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //usuarios de prueba
  public usuariosValidos: User[] = [
    { id:1 , username: "Ruben", password: "1234567", firstName: "Ruben", lastName: "Umaña"},
  ];
  
  //Controlador del formulario
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {}

  ngOnInit(){
    //Inicia el formulario
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });  
   
    // resetea el status de login
    this.authenticationService.logout();

    //Si no esta logueado lo devuelve a la pagina del login
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // conveniencia a la hora de llamar a los valores del formulario
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // se detiene si el formulario si es invalido
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    //llama al login y le manda los datos, loguea si son correctos y si no entonces tira un error
    this.authenticationService.login(this.f.usuario.value, this.f.contrasena.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["/datos"]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
    });
  }
}