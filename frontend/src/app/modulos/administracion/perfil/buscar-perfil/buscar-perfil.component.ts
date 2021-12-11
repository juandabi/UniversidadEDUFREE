import { Component, OnInit } from '@angular/core';
import { ModeloPerfil } from 'src/app/modelos/perfil.modelo';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-buscar-perfil',
  templateUrl: './buscar-perfil.component.html',
  styleUrls: ['./buscar-perfil.component.css'],
})
export class BuscarPerfilComponent implements OnInit {
  listadoPerfiles: ModeloPerfil[] = [];

  constructor(private perfilServicio: PerfilService) {}

  ngOnInit(): void {
    this.ObtenerPerfiles();
  }

  ObtenerPerfiles() {
    this.perfilServicio.ObtenerPerfiles().subscribe((datos: ModeloPerfil[]) => {
      this.listadoPerfiles = datos;
    });
  }
}
