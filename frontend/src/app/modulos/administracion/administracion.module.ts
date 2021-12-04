import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { BuscarAsignaturaComponent } from './asignaturas/buscar-asignatura/buscar-asignatura.component';
import { CrearAsignaturaComponent } from './asignaturas/crear-asignatura/crear-asignatura.component';
import { EditarAsignaturaComponent } from './asignaturas/editar-asignatura/editar-asignatura.component';
import { EliminarAsignaturaComponent } from './asignaturas/eliminar-asignatura/eliminar-asignatura.component';
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

@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    BuscarProgramaAcademicoComponent,
    CrearProgramaAcademicoComponent,
    EliminarProgramaAcademicoComponent,
    EditarProgramaAcademicoComponent,
    CrearPerfilComponent,
    BuscarPerfilComponent,
    EditarPerfilComponent,
    EliminarPerfilComponent,
    BuscarAsignaturaComponent,
    CrearAsignaturaComponent,
    EditarAsignaturaComponent,
    EliminarAsignaturaComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdministracionModule {}
