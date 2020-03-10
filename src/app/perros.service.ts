import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';

  }

  getPerros(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/perros`).toPromise();
  }

  getPerrosRaza(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/perros/raza`).toPromise();
  }

  getPerrosColor(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/perros/color`).toPromise();
  }

  getPerrosSize(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/perros/tamano`).toPromise();
  }

  getPerrosSexo(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/perros/sexo`).toPromise();
  }


  getFindPerro(values): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/api/perros/buscar`, values).toPromise();
  }
}

