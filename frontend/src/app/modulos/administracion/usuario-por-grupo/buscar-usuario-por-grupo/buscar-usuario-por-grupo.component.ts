import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

@Component({
  selector: 'app-buscar-usuario-por-grupo',
  templateUrl: './buscar-usuario-por-grupo.component.html',
  styleUrls: ['./buscar-usuario-por-grupo.component.css'],
})
export class BuscarUsuarioPorGrupoComponent implements OnInit {
  listadoUsuariosPorGrupos: ModeloGrupo[] = [];
  listadoEstudiantes: ModeloUsuario[] = [];
  grupoId: string = '';
  filtroEstudiantes = [];

  constructor(
    private grupoServicio: GrupoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.params['grupoId'];
    this.ObtenerUsuariosPorGrupos(this.grupoId);
  }

  ObtenerUsuariosPorGrupos(arg: string) {
    this.grupoServicio.ObtenerGrupos().subscribe((datos: ModeloGrupo[]) => {
      let listado = datos;
      if (!arg) {
        this.listadoUsuariosPorGrupos = listado;
      } else {
        this.listadoUsuariosPorGrupos = listado.filter((a) => a.id === arg);
        this.listadoUsuariosPorGrupos.forEach((grupo) => {
          grupo.usuarios?.forEach((usuario) => {
            this.listadoEstudiantes.push(usuario);
          });
        });
      }
      console.log(this.listadoEstudiantes);
    });
  }
}
