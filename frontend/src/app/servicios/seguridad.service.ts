import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  Identificar(correo: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post(
      ` ${this.url}/identificarUsuario`,
      {
        correo: correo,
        clave: clave,
      },
      {
        headers: new HttpHeaders({}),
      }
    );
  }
}
