import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent implements OnInit {
  listadoUsuarios: ModeloUsuario[] = [];
  constructor(private usuarioServicio: UsuarioService) {}

  ngOnInit(): void {
    this.ObtenerUsuarios();
  }
  ObtenerUsuarios() {
    this.usuarioServicio
      .ObtenerUsuarios()
      .subscribe((datos: ModeloUsuario[]) => {
        this.listadoUsuarios = datos;
      });
  }
}
