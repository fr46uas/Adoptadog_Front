import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProtectoraFront';

  login: FormGroup;
  token: any;
  user: any;
  userApellido: any;

  constructor(private clientesService: ClientesService, private router: Router) {

    this.token = "";
    this.user = "";
    this.userApellido = "";


    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(pLogin) {
    this.clientesService.login(pLogin.value)

      .then(response => {
        if (response['error']) {
          alert(response['error']);
        } else {
          localStorage.setItem('user-token', response['exito']);
          localStorage.setItem('nombre', response['nombre']);
          localStorage.setItem('apellidos', response['apellidos']);
          this.token = localStorage.getItem('user-token');
          this.user = localStorage.getItem('nombre');
          this.userApellido = localStorage.getItem('apellidos');


        }
      }).catch(err => {
        console.log(err);
      });
  }

  scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  cerrarSesion() {
    localStorage.removeItem('user-token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellidos');
    this.router.navigate(['/principal/']);
    this.token = "";

  }
}
