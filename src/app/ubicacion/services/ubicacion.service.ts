import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ubicacion } from '../../models/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUbicaciones() : Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(this.apiURL);
  }

  getUbicacion(id: number) {
    return this.http.get<Ubicacion[]>(`${this.apiURL}/${id}`);
  }

}
