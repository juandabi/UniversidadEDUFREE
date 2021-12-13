import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css'],
})
export class CambioClaveComponent implements OnInit {
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) {}

  ngOnInit(): void {}
}
