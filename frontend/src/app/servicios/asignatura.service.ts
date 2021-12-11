import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsignatura } from '../modelos/asignatura.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  obtenerAsignaturas(): Observable<ModeloAsignatura[]> {
    return this.http.get<ModeloAsignatura[]>(`${this.url}/asignaturas`);
  }

  ObtenerAsignaturaPorId(id: string): Observable<ModeloAsignatura> {
    return this.http.get<ModeloAsignatura>(`${this.url}/asignaturas/${id}`);
  }

  crearAsignatura(asignatura: ModeloAsignatura): Observable<ModeloAsignatura> {
    return this.http.post<ModeloAsignatura>(
      `${this.url}/asignaturas`,
      asignatura,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  ActualizarAsignatura(
    asignatura: ModeloAsignatura
  ): Observable<ModeloAsignatura> {
    return this.http.put<ModeloAsignatura>(
      `${this.url}/asignaturas/${asignatura.id}`,
      asignatura,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  eliminarAsignatura(id: string): Observable<any> {
    return this.http.delete<ModeloAsignatura>(`${this.url}/asignaturas/${id}`, {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
