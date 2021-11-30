import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPerfilComponent } from './perfil/buscar-perfil/buscar-perfil.component';
import { CrearPerfilComponent } from './perfil/crear-perfil/crear-perfil.component';
import { EditarPerfilComponent } from './perfil/editar-perfil/editar-perfil.component';
import { EliminarPerfilComponent } from './perfil/eliminar-perfil/eliminar-perfil.component';
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
    path: 'crear-usuarios',
    component: CrearUsuarioComponent,
  },
  {
    path: 'editar-usuarios/:id',
    component: EditarUsuarioComponent,
  },
  {
    path: 'eliminar-usuarios/:id',
    component: EliminarUsuarioComponent,
  },
  {
    path: 'buscar-usuarios',
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

  // PERFILES
  {
    path: 'listar-perfiles',
    component: BuscarPerfilComponent,
  },
  {
    path: 'buscar-perfiles',
    component: BuscarPerfilComponent,
  },
  {
    path: 'crear-perfiles',
    component: CrearPerfilComponent,
  },
  {
    path: 'eliminar-perfiles/:id',
    component: EliminarPerfilComponent,
  },
  {
    path: 'editar-perfiles/:id',
    component: EditarPerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
