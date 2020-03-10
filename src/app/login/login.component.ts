import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;



  constructor(private clientesService: ClientesService) {
    this.login = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

  }

  ngOnInit() {
  }





}
