import { Component, OnInit } from '@angular/core';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';

@Component({
  selector: 'app-buscar-usuario-por-grupo',
  templateUrl: './buscar-usuario-por-grupo.component.html',
  styleUrls: ['./buscar-usuario-por-grupo.component.css'],
})
export class BuscarUsuarioPorGrupoComponent implements OnInit {
  listadoUsuariosPorGrupos: ModeloUsuarioPorGrupo[] = [];

  constructor(private usuariosPorGrupoServicio: UsuarioPorGrupoService) {}

  ngOnInit(): void {
    this.ObtenerUsuariosPorGrupos();
  }

  ObtenerUsuariosPorGrupos() {
    this.usuariosPorGrupoServicio
      .ObtenerUsuariosPorGrupo()
      .subscribe((datos: ModeloUsuarioPorGrupo[]) => {
        this.listadoUsuariosPorGrupos = datos;
      });
  }
}
