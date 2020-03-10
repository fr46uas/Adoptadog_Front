import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  foro: FormGroup;
  user: any;
  userApellido: any;
  arrPost: any;

  constructor(private clientesService: ClientesService, private router: Router) {
    this.user = "";
    this.userApellido = "";
    this.arrPost = [];

    this.foro = new FormGroup({
      titulo: new FormControl(''),
      mensaje: new FormControl('')
    });
  }

  ngOnInit() {
    this.user = localStorage.getItem('nombre');
    this.userApellido = localStorage.getItem('apellidos');

    this.clientesService.getPintarPost()
      .then(response => {

        this.arrPost = response;
        console.log(response)
      });



    /* this.clientesService.getPintarPost()
      .then(response => {
        this.arrPost = response;
        console.log(response);
      }); */

  }

  onSubmit() {
    this.foro.value.fecha = new Date();
    this.clientesService.insertPost(this.user, this.userApellido, this.foro.value, this.foro.value.fecha).then(response => {
      this.arrPost = response;
    });
    this.foro.reset();

  }


};