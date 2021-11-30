import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPerfil } from '../modelos/perfil.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  ObtenerPerfiles(): Observable<ModeloPerfil[]> {
    return this.http.get<ModeloPerfil[]>(`${this.url}/perfiles`);
  }

  ObtenerPerfilPorId(id: string): Observable<ModeloPerfil> {
    return this.http.get<ModeloPerfil>(`${this.url}/perfiles/${id}`);
  }

  CrearPerfil(perfil: ModeloPerfil): Observable<ModeloPerfil> {
    return this.http.post<ModeloPerfil>(`${this.url}/perfiles`, perfil, {
      headers: new HttpHeaders({
        Authorization: `bearer ${this.token}`,
      }),
    });
  }

  ActualizarPerfil(perfil: ModeloPerfil): Observable<ModeloPerfil> {
    return this.http.put<ModeloPerfil>(
      `${this.url}/perfiles/${perfil.id}`,
      perfil,
      {
        headers: new HttpHeaders({
          Authorization: `bearer ${this.token}`,
        }),
      }
    );
  }

  EliminarPerfil(id: string): Observable<any> {
    return this.http.delete<ModeloPerfil>(`${this.url}/perfiles/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${this.token}`,
      }),
    });
  }
}
