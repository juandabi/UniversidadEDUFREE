import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsignatura } from 'src/app/modelos/asignatura.modelo';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';

@Component({
  selector: 'app-buscar-asignatura',
  templateUrl: './buscar-asignatura.component.html',
  styleUrls: ['./buscar-asignatura.component.css'],
})
export class BuscarAsignaturaComponent implements OnInit {
  filtroAsignatura = [];
  listadoAsignaturas: ModeloAsignatura[] = [];
  programaAcademicoId: string = '';
  constructor(
    private asignaturaServicio: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.programaAcademicoId =
      this.route.snapshot.params['programaAcademicoId'];
    this.ObtenerAsignaturas(this.programaAcademicoId);
  }

  ObtenerAsignaturas(arg: string) {
    this.asignaturaServicio
      .obtenerAsignaturas()
      .subscribe((datos: ModeloAsignatura[]) => {
        let listado = datos;
        if (!arg) {
          this.listadoAsignaturas = listado;
        } else {
          this.listadoAsignaturas = listado.filter(
            (a) => a.programaAcademicoId === arg
          );
        }
      });
  }
}
