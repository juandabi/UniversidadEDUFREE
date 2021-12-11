import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
declare var M: any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css'],
})
export class BarraNavegacionComponent implements OnInit {
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
