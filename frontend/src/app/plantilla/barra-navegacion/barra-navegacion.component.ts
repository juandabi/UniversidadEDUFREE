import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/Identificar.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare var M: any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
  seInicioSesion: boolean = false;
  SesionAdministrador: boolean = false;
  SesionEstudiante: boolean = false;
  listadoUsuarios: ModeloUsuario[] = [];
  usuarioPerfil: string | undefined;
  usuarioId: string | undefined;
  subs: Subscription = new Subscription();

  constructor(
    private seguridadServicio: SeguridadService,
    private usuarioServicio: UsuarioService
  ) {}

  ngOnInit(): void {
    this.ObtenerUsuarios();

    this.subs = this.seguridadServicio
      .ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        this.seInicioSesion = datos.estaIdentificado;
      });

    //Obtener Id de usuario
    this.subs = this.seguridadServicio
      .ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        let informacionUsuario = datos.datos;
        this.usuarioId = informacionUsuario?.id;
      });

    document.addEventListener('DOMContentLoaded', function () {
      var options = {
        edge: 'right',
      };
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  }

  ObtenerUsuarios() {
    this.usuarioServicio
      .ObtenerUsuarios()
      .subscribe((datos: ModeloUsuario[]) => {
        this.listadoUsuarios = datos;
        let informacionUsuario = this.listadoUsuarios.find(
          (usuario) => usuario.id == this.usuarioId
        );
        this.usuarioPerfil = informacionUsuario?.perfilId;
        console.log(this.usuarioPerfil);

        if (this.seInicioSesion && this.usuarioPerfil == '1') {
          this.SesionAdministrador = true;
        } else if (
          (this.seInicioSesion && this.usuarioPerfil == '3') ||
          this.usuarioPerfil == '4'
        ) {
          this.SesionEstudiante = true;
        }
        console.log(this.SesionAdministrador);
        console.log(this.SesionEstudiante);
      });
  }
}
