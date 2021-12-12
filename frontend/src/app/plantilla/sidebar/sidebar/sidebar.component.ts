import { Component, OnInit } from '@angular/core';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Subscription } from 'rxjs';
declare var M: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) {}

  ngOnInit(): void {
    this.subs = this.seguridadServicio
      .ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        this.seInicioSesion = datos.estaIdentificado;
      });

    document.addEventListener('DOMContentLoaded', function () {
      var options = {
        edge: 'right',
      };
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  }
}