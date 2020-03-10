import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PerrerasService {

  constructor(private http: HttpClient) { }

  getPerreras(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perreras').toPromise();
  }

}
