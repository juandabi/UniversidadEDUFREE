import { Component, OnInit } from '@angular/core';
import { ModeloGrupo } from 'src/app/modelos/grupos';
import { GruposService } from 'src/app/servicios/grupos-service.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  listaHorarios: any = [];
  listadoGrupos: ModeloGrupo[] = [];
  grupoActual = '';
  id = '';
  modo = '';

  constructor(private grupoServicio: GruposService) { }

  ngOnInit(): void {
    this.obtenerGrupos();
  }

  obtenerGrupos() {
    this.grupoServicio
      .ObtenerGrupo()
      .subscribe((datos: ModeloGrupo[]) => {
        this.listadoGrupos = datos;
      });
  }

  cambiarModo(nuevoModo: any) {
    this.modo = nuevoModo;
  }


  verHorarios(grupo:any) {
     this.listaHorarios= grupo.horario;
     this.cambiarModo('horario');
  }


}
