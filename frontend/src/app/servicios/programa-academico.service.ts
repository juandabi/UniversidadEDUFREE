import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPrograma } from '../modelos/programa.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ProgramaAcademicoService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  ObtenerProgramas(): Observable<ModeloPrograma[]> {
    return this.http.get<ModeloPrograma[]>(`${this.url}/programas-academicos`);
  }

  ObtenerProgramaPorId(id: string): Observable<ModeloPrograma> {
    return this.http.get<ModeloPrograma>(
      `${this.url}/programas-academicos/${id}`
    );
  }

  CrearPrograma(programa: ModeloPrograma): Observable<ModeloPrograma> {
    return this.http.post<ModeloPrograma>(
      `${this.url}/programas-academicos`,
      programa,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  ActualizarPrograma(programa: ModeloPrograma): Observable<ModeloPrograma> {
    return this.http.put<ModeloPrograma>(
      `${this.url}/programas-academicos/${programa.id}`,
      programa,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarPrograma(id: string): Observable<any> {
    return this.http.delete<ModeloPrograma>(
      `${this.url}/programas-academicos/${id}`,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
}
