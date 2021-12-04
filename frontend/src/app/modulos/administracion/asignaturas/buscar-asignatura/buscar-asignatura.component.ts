import { Component, OnInit } from '@angular/core';
import { ModeloAsignatura } from 'src/app/modelos/asignatura.modelo';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';

@Component({
  selector: 'app-buscar-asignatura',
  templateUrl: './buscar-asignatura.component.html',
  styleUrls: ['./buscar-asignatura.component.css'],
})
export class BuscarAsignaturaComponent implements OnInit {
  listadoAsignaturas: ModeloAsignatura[] = [];
  constructor(private asignaturaServicio: AsignaturaService) {}

  ngOnInit(): void {
    this.ObtenerAsignaturas();
  }

  ObtenerAsignaturas() {
    this.asignaturaServicio
      .obtenerAsignaturas()
      .subscribe((datos: ModeloAsignatura[]) => {
        this.listadoAsignaturas = datos;
      });
  }
}
