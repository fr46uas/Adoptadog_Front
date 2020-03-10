import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: FormGroup;


  constructor(private clientesService: ClientesService, private router: Router) {
    this.registro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repeat_password: new FormControl('', [
        Validators.required
      ]),
      codigo_postal: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/)
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/)
      ]),
      localidad: new FormControl('', [
        Validators.required
      ]),
      provincia: new FormControl('', [
        Validators.required
      ])
    },
      [
        this.passwordValidator
      ]);
  }

  ngOnInit() {
    const controlNombre = this.registro.controls['nombre']
    controlNombre.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    // console.log(this.registro.value);
    this.clientesService.insertUsuario(this.registro.value)
      .then(response => {
        console.log(response);
      });
    alert('Te has registrado con exito')

    this.router.navigate(['/principal/']);
  }

  passwordValidator(form: FormGroup) {
    const passwordControl = form.controls['password'];
    const repeatpasswordControl = form.controls['repeat_password'];

    if (passwordControl.value === repeatpasswordControl.value) {
      return null;
    } else {
      return { passwordvalidator: true };

    }
  }

}
