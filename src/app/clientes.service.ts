import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  // USUARIO

  insertUsuario(values): Promise<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios`, values).toPromise();
  }

  // LOGIN

  login(values) {

    return this.http.post(`${this.baseUrl}/api/usuarios/login`, values).toPromise();

  }

  // POST

  insertPost(pUser, pUserApellido, values, pFecha): Promise<any> {
    values.usuario = pUser + ' ' + pUserApellido;
    values.fecha = pFecha;
    return this.http.post(`${this.baseUrl}/api/usuarios/post`, values).toPromise();
  }

  getPintarPost(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/usuarios/post`).toPromise();

  }
}