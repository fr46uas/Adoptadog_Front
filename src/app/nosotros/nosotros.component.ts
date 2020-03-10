import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  contacto: FormGroup;

  constructor() {
    this.contacto = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    alert('Gracias por contactar con nosotros');

  }

  reset() {

    this.contacto.reset();
  }

}
