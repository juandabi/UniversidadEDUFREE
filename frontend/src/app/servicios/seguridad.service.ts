import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(
    new ModeloIdentificar()
  );

  constructor(private http: HttpClient) {
    this.verificarSesionActual();
  }

  verificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarSesion(datos);
    }
  }

  RefrescarSesion(datos: ModeloIdentificar) {
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion() {
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(correo: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(
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
  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    localStorage.setItem('datosSesion', JSON.stringify(datos));
    this.RefrescarSesion(datos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      return JSON.parse(datosString);
    }
    return null;
  }
  EliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.RefrescarSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion() {
    let datosString = localStorage.getItem('datosSesion');
    return datosString;
  }

  obtenerToken() {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos.tk;
    }
    return null;
  }
}
