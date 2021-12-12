import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://localhost:3000';
  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService
  ) {
    this.token = this.seguridadServicio.obtenerToken();
  }

  ObtenerUsuarios(): Observable<ModeloUsuario[]> {
    return this.http.get<ModeloUsuario[]>(
      `${this.url}/usuarios?filter[include][]=perfil`
    );
  }

  ObtenerUsuarioPorId(id: string): Observable<ModeloUsuario> {
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`);
  }


  ObtenerUsuarioPorCorreo(correo: string): Observable<ModeloUsuario> {
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${correo}`);
  }

  CrearUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.token}`,
      }),
    });
  }

  ActualizarUsuario(usuario: ModeloUsuario): Observable<ModeloUsuario> {
    return this.http.put<ModeloUsuario>(
      `${this.url}/usuarios/${usuario.id}`,
      usuario,
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete<ModeloUsuario>(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.token}`,
      }),
    });
  }



  cambiarClave(id: string, claveNueva : string ): Observable<any> {
    return this.http.patch(`${this.url}/usuarios/${id}`,
      JSON.stringify({ clave: claveNueva }),
      {
        headers: new HttpHeaders({
          authorization: `Bearer ${this.token}`,
        })
      });
  }
}
