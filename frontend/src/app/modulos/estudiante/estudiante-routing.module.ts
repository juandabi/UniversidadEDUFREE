import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarGruposPorEstudianteComponent } from './grupos/buscar-grupos-por-estudiante/buscar-grupos-por-estudiante.component';

const routes: Routes = [
  {
    path: 'listar-grupos',
    component: BuscarGruposPorEstudianteComponent,
  },
  {
    path: 'listar-grupos/:usuarioId',
    component: BuscarGruposPorEstudianteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteRoutingModule {}
