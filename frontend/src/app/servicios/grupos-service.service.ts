import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloGrupo } from '../modelos/grupos';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  url = 'http://localhost:3000';
  token: string = '';


  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  
  ObtenerGrupo(): Observable<ModeloGrupo[]> {
    return this.http.get <ModeloGrupo[]>(`${this.url}/grupos/`);
  }

  ObtenerGrupoPorId(id: string): Observable<ModeloGrupo> {
    return this.http.get<ModeloGrupo>(
      `${this.url}/grupos/${id}`
    );
  }

  CrearGrupo(Grupo: ModeloGrupo): Observable<ModeloGrupo> {
    return this.http.post<ModeloGrupo>(
      `${this.url}/grupos`,
      Grupo,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  ActualizarGrupo(grupo: ModeloGrupo): Observable<ModeloGrupo> {
    return this.http.put<ModeloGrupo>(
      `${this.url}/grupos/${grupo.id}`,
      grupo,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
  EliminarGrupo(id: string): Observable<any> {
    return this.http.delete<ModeloGrupo>(
      `${this.url}/grupos/${id}`,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
}
