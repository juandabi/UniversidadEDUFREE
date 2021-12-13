import { Component, OnInit } from '@angular/core';
import { ModeloPrograma } from 'src/app/modelos/programa.modelo';
import { ProgramaAcademicoService } from 'src/app/servicios/programa-academico.service';

@Component({
  selector: 'app-buscar-programa-academico',
  templateUrl: './buscar-programa-academico.component.html',
  styleUrls: ['./buscar-programa-academico.component.css'],
})
export class BuscarProgramaAcademicoComponent implements OnInit {
  filtroPrograma = [];
  listadoProgramas: ModeloPrograma[] = [];
  constructor(private programaServicio: ProgramaAcademicoService) {}

  ngOnInit(): void {
    this.ObtenerProgramas();
  }
  ObtenerProgramas() {
    this.programaServicio
      .ObtenerProgramas()
      .subscribe((datos: ModeloPrograma[]) => {
        this.listadoProgramas = datos;
        console.log(datos[0]);
      });
  }
}
