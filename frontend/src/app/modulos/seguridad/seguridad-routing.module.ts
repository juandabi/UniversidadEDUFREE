import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacionComponent,
  },
  {
    path: 'cerrarSesion',
    component: CerrarSesionComponent,
  },
  {
    path: 'cambioClave',
    component: CambioClaveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ScrollingModule],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
