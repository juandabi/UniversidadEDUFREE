import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGruposComponent } from './grupos/crear-grupos/crear-grupos/crear-grupos.component';
import { EditarGrupoComponent } from './grupos/editar-grupos/editar-grupo/editar-grupo.component';
import { EliminarGrupoComponent } from './grupos/eliminar-grupo/eliminar-grupo/eliminar-grupo.component';
import { GruposComponent } from './grupos/grupos.component';
import { BuscarProgramaAcademicoComponent } from './programas-academicos/buscar-programa-academico/buscar-programa-academico.component';
import { CrearProgramaAcademicoComponent } from './programas-academicos/crear-programa-academico/crear-programa-academico.component';
import { EditarProgramaAcademicoComponent } from './programas-academicos/editar-programa-academico/editar-programa-academico.component';
import { EliminarProgramaAcademicoComponent } from './programas-academicos/eliminar-programa-academico/eliminar-programa-academico.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  // USUARIOS
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent,
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent,
  },
  {
    path: 'listar-usuarios',
    component: BuscarUsuarioComponent,
  },

  // PROGRAMAS ACADEMICOS
  {
    path: 'listar-programas-academicos',
    component: BuscarProgramaAcademicoComponent,
  },
  {
    path: 'buscar-programas-academicos',
    component: BuscarProgramaAcademicoComponent,
  },
  {
    path: 'crear-programas-academicos',
    component: CrearProgramaAcademicoComponent,
  },
  {
    path: 'eliminar-programas-academicos/:id',
    component: EliminarProgramaAcademicoComponent,
  },
  {
    path: 'editar-programas-academicos/:id',
    component: EditarProgramaAcademicoComponent,
  },
  
  //grupos
  {
    path: 'grupos',
    component: GruposComponent,
  },
  {
    path: 'listar-grupos',
    component: GruposComponent,
  },
  {
    path: 'eliminar-grupos/:id',
    component: EliminarGrupoComponent,
  },
  {
    path: 'crear-grupos',
    component: CrearGruposComponent,
  },
  {
    path: 'editar-grupos/:id',
    component: EditarGrupoComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}


