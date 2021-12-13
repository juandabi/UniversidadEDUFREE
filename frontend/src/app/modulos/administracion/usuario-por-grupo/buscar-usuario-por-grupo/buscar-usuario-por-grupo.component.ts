import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';

@Component({
  selector: 'app-buscar-usuario-por-grupo',
  templateUrl: './buscar-usuario-por-grupo.component.html',
  styleUrls: ['./buscar-usuario-por-grupo.component.css'],
})
export class BuscarUsuarioPorGrupoComponent implements OnInit {
  listadoUsuariosPorGrupos: ModeloUsuarioPorGrupo[] = [];
  grupoId: string = '';
  filtroEstudiantes = [];

  constructor(
    private usuariosPorGrupoServicio: UsuarioPorGrupoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.params['grupoId'];
    this.ObtenerUsuariosPorGrupos(this.grupoId);
  }

  ObtenerUsuariosPorGrupos(arg: string) {
    this.usuariosPorGrupoServicio
      .ObtenerUsuariosPorGrupo()
      .subscribe((datos: ModeloUsuarioPorGrupo[]) => {
        let listado = datos;
        if (arg != '') {
          this.listadoUsuariosPorGrupos = listado;
        } else {
          this.listadoUsuariosPorGrupos = listado.filter(
            (a) => a.grupoId === arg
          );
        }
      });
  }
}
