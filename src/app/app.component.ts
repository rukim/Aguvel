import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aguvel';
  constructor(public router: Router) {}


abrirDatos() {
  this.router.navigateByUrl('/datos');
  }
}