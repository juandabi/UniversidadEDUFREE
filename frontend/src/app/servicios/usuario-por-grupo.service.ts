import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuarioPorGrupo } from '../modelos/usuarioPorGrupo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioPorGrupoService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  ObtenerUsuariosPorGrupo(): Observable<ModeloUsuarioPorGrupo[]> {
    return this.http.get<ModeloUsuarioPorGrupo[]>(
      `${this.url}/usuarios-por-grupos`
    );
  }

  ObtenerUsuariosPorGrupoPorId(id: string): Observable<ModeloUsuarioPorGrupo> {
    return this.http.get<ModeloUsuarioPorGrupo>(
      `${this.url}/usuarios-por-grupos/${id}`
    );
  }

  CrearUsuarioPorGrupo(
    usuarioPorGrupo: ModeloUsuarioPorGrupo
  ): Observable<ModeloUsuarioPorGrupo> {
    return this.http.post<ModeloUsuarioPorGrupo>(
      `${this.url}/usuarios-por-grupos`,
      usuarioPorGrupo,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  ActualizarUsuarioPorGrupo(
    usuarioPorGrupo: ModeloUsuarioPorGrupo
  ): Observable<ModeloUsuarioPorGrupo> {
    return this.http.put<ModeloUsuarioPorGrupo>(
      `${this.url}/usuarios-por-grupos/${usuarioPorGrupo.id}`,
      usuarioPorGrupo,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarUsuarioPorGrupo(id: string): Observable<any> {
    return this.http.delete<ModeloUsuarioPorGrupo>(
      `${this.url}/usuarios-por-grupos/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
}
