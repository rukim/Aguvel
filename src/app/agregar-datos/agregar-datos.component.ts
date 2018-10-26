import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { AguaService, AlertService } from '../_servicios';

@Component({
  selector: 'app-agregar-datos',
  templateUrl: './agregar-datos.component.html',
  styleUrls: ['./agregar-datos.component.css']
})
export class AgregarDatosComponent implements OnInit {

  today: number = Date.now();
  dataForm: FormGroup;
  loading = false;
  submitted = false;


  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private aguaService: AguaService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      flujoEntrada: ['', Validators.required],
      volumenAS1: ['', Validators.required],
      flujoSalida: ['', Validators.required],
      volumenAS2: ['', Validators.required],
      dosificacionCloro: ['', Validators.required],
      pesoCilindro1: ['', Validators.required],
      pesoCilindro2: ['', Validators.required],
      presionEyectorA: ['', Validators.required],
      presionEyectorD: ['', Validators.required],
      presionAqmE: ['', Validators.required],
      presionAqmS: ['', Validators.required],
      presionAdE: ['', Validators.required],
      presionAdS: ['', Validators.required],
      phE: ['', Validators.required],
      phET: ['', Validators.required],
      phS: ['', Validators.required],
      phST: ['', Validators.required],
      cloroL: ['', Validators.required],
      cloroT: ['', Validators.required],
      arsenicoE: ['', Validators.required],
      arsenicoS: ['', Validators.required],
      manganesoE: ['', Validators.required],
      manganesoS: ['', Validators.required],
      hierroE: ['', Validators.required],
      hierroS: ['', Validators.required],
      observaciones :[]
    });
  }

   // conveniencia a la hora de llamar a los valores del formulario
   get f() { return this.dataForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dataForm.invalid) {
        return;
    }

    this.loading = true;
    this.aguaService.register(this.dataForm.value)
      .pipe(first())
      .subscribe(
        data => {   
          this.alertService.success('Registro de datos correcto',true);      
          this.router.navigate(['/datos']);
        },
        error => {
          this.loading = false;
      });
      this.dataForm.reset();
      this.submitted = false;
   }

}

