import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsignaturaComponent } from './asignaturas/buscar-asignatura/buscar-asignatura.component';
import { CrearAsignaturaComponent } from './asignaturas/crear-asignatura/crear-asignatura.component';
import { EditarAsignaturaComponent } from './asignaturas/editar-asignatura/editar-asignatura.component';
import { EliminarAsignaturaComponent } from './asignaturas/eliminar-asignatura/eliminar-asignatura.component';
import { BuscarGrupoComponent } from './grupos/buscar-grupo/buscar-grupo.component';
import { CrearGrupoComponent } from './grupos/crear-grupo/crear-grupo.component';
import { EditarGrupoComponent } from './grupos/editar-grupo/editar-grupo.component';
import { EliminarGrupoComponent } from './grupos/eliminar-grupo/eliminar-grupo.component';
import { BuscarPerfilComponent } from './perfil/buscar-perfil/buscar-perfil.component';
import { CrearPerfilComponent } from './perfil/crear-perfil/crear-perfil.component';
import { EditarPerfilComponent } from './perfil/editar-perfil/editar-perfil.component';
import { EliminarPerfilComponent } from './perfil/eliminar-perfil/eliminar-perfil.component';
import { BuscarProgramaAcademicoComponent } from './programas-academicos/buscar-programa-academico/buscar-programa-academico.component';
import { CrearProgramaAcademicoComponent } from './programas-academicos/crear-programa-academico/crear-programa-academico.component';
import { EditarProgramaAcademicoComponent } from './programas-academicos/editar-programa-academico/editar-programa-academico.component';
import { EliminarProgramaAcademicoComponent } from './programas-academicos/eliminar-programa-academico/eliminar-programa-academico.component';
import { BuscarUsuarioPorGrupoComponent } from './usuario-por-grupo/buscar-usuario-por-grupo/buscar-usuario-por-grupo.component';
import { CrearUsuarioPorGrupoComponent } from './usuario-por-grupo/crear-usuario-por-grupo/crear-usuario-por-grupo.component';
import { EditarUsuarioPorGrupoComponent } from './usuario-por-grupo/editar-usuario-por-grupo/editar-usuario-por-grupo.component';
import { EliminarUsuarioPorGrupoComponent } from './usuario-por-grupo/eliminar-usuario-por-grupo/eliminar-usuario-por-grupo.component';
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

  // ASIGNATURAS

  {
    path: 'listar-asignaturas',
    component: BuscarAsignaturaComponent,
  },
  {
    path: 'listar-asignaturas/:programaAcademicoId',
    component: BuscarAsignaturaComponent,
  },
  {
    path: 'buscar-asignaturas',
    component: BuscarAsignaturaComponent,
  },
  {
    path: 'crear-asignaturas/:programaAcademicoId',
    component: CrearAsignaturaComponent,
  },
  {
    path: 'eliminar-asignaturas/:id',
    component: EliminarAsignaturaComponent,
  },
  {
    path: 'editar-asignaturas/:id',
    component: EditarAsignaturaComponent,
  },

  // GRUPOS
  {
    path: 'listar-grupos',
    component: BuscarGrupoComponent,
  },
  {
    path: 'listar-grupos/:asignaturaId',
    component: BuscarGrupoComponent,
  },
  {
    path: 'buscar-grupos',
    component: BuscarGrupoComponent,
  },
  {
    path: 'crear-grupos/:asignaturaId',
    component: CrearGrupoComponent,
  },
  {
    path: 'editar-grupos/:id',
    component: EditarGrupoComponent,
  },
  {
    path: 'eliminar-grupos/:id',
    component: EliminarGrupoComponent,
  },

  // USUARIOS POR GRUPO
  {
    path: 'listar-usuarios-por-grupo',
    component: BuscarUsuarioPorGrupoComponent,
  },
  {
    path: 'listar-usuarios-por-grupo/:grupoId',
    component: BuscarUsuarioPorGrupoComponent,
  },
  {
    path: 'buscar-usuarios-por-grupo',
    component: BuscarUsuarioPorGrupoComponent,
  },
  {
    path: 'crear-usuarios-por-grupo',
    component: CrearUsuarioPorGrupoComponent,
  },
  {
    path: 'crear-usuarios-por-grupo/:grupoId',
    component: CrearUsuarioPorGrupoComponent,
  },
  {
    path: 'editar-usuarios-por-grupo/:id',
    component: EditarUsuarioPorGrupoComponent,
  },
  {
    path: 'eliminar-usuarios-por-grupo/:id',
    component: EliminarUsuarioPorGrupoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
