import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-grupo',
  templateUrl: './buscar-grupo.component.html',
  styleUrls: ['./buscar-grupo.component.css'],
})
export class BuscarGrupoComponent implements OnInit {
  filtroGrupo = [];
  listadoGrupos: ModeloGrupo[] = [];
  listadoUsuarios: ModeloUsuario[] = [];
  asignaturaId: string = '';

  constructor(
    private grupoServicio: GrupoService,
    private usuarioServicio: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.asignaturaId = this.route.snapshot.params['asignaturaId'];
    this.ObtenerGrupos(this.asignaturaId);
    this.buscarNombreDocente();
  }

  buscarNombreDocente() {
    this.usuarioServicio
      .ObtenerUsuarios()
      .subscribe((datos: ModeloUsuario[]) => {});
  }

  ObtenerGrupos(arg: string) {
    this.grupoServicio.ObtenerGrupos().subscribe((datos: ModeloGrupo[]) => {
      let listado = datos;
      if (!arg) {
        this.listadoGrupos = listado;
      } else {
        this.listadoGrupos = listado.filter((a) => a.asignaturaId === arg);
      }
    });
  }
}
