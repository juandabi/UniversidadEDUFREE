import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from './modelos/identificar.modelo';
import { SeguridadService } from './servicios/seguridad.service';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
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
  
