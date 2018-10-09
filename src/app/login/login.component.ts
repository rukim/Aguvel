import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //usuarios de prueba
  usuariosValidos: { usuario: string, contrasena: string }[] = [
    { "usuario": "Ruben", "contrasena": "1234" },
    { "usuario": "asda", "contrasena": "caca" }
  ];
  //para usar en formulario
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private http: HttpClient,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder) {}

    ngOnInit() {
      localStorage.setItem("usuarios",JSON.stringify(this.usuariosValidos));
      this.loginForm = this.formBuilder.group({
        usuario: ['', Validators.required],
        contrasena: ['', Validators.required]
  }); }
  // conveniencia para usar el formulario
  get f() { return this.loginForm.controls; }

  login(usuario: string, contrasena: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { usuario: usuario, contrasena: contrasena })
      .pipe(map(usua => {
        // login exitoso si existe un jwt token en la respuesta
        if (usua && usua.token) {
          // guarda el token y el usuario para mantener la sesion activa
          localStorage.setItem('currentUser', JSON.stringify(usua));
        }
    return usua;
  }));
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.login(this.f.usuario.value, this.f.contrasena.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(["/datos"]);
      },
      error => {
        console.log("error");
        this.loading = false;
      });
}
}