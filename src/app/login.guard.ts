import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClientesService } from './clientes.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private clientesService: ClientesService) {

  }
  canActivate(): boolean {
    if (localStorage.getItem('user-token')) {
      return true;
    } else {
      this.router.navigate(['/principal']);
      return false;
    }
  }

}
