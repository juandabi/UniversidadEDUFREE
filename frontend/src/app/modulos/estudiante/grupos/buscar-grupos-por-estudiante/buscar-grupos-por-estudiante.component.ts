import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

@Component({
  selector: 'app-buscar-grupos-por-estudiante',
  templateUrl: './buscar-grupos-por-estudiante.component.html',
  styleUrls: ['./buscar-grupos-por-estudiante.component.css'],
})
export class BuscarGruposPorEstudianteComponent implements OnInit {
  usuarioId: string = '';
  listadoGrupos: ModeloGrupo[] = [];

  constructor(
    private route: ActivatedRoute,
    private grupoServicio: GrupoService
  ) {}

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];
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
