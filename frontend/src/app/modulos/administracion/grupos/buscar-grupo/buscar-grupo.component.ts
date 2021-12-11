import { Component, OnInit } from '@angular/core';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

@Component({
  selector: 'app-buscar-grupo',
  templateUrl: './buscar-grupo.component.html',
  styleUrls: ['./buscar-grupo.component.css'],
})
export class BuscarGrupoComponent implements OnInit {
  listadoGrupos: ModeloGrupo[] = [];
  constructor(private grupoServicio: GrupoService) {}

  ngOnInit(): void {
    this.ObtenerGrupos();
  }

  ObtenerGrupos() {
    this.grupoServicio.ObtenerGrupos().subscribe((datos: ModeloGrupo[]) => {
      this.listadoGrupos = datos;
    });
  }
}
