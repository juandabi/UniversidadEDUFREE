import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FiltroAsignaturaPipe } from 'src/app/pipes/filtro-asignatura.pipe';
import { FiltroEstudiantesPipe } from 'src/app/pipes/filtro-estudiantes.pipe';
import { FiltroGrupoPipe } from 'src/app/pipes/filtro-grupo.pipe';
import { FiltroProgramaPipe } from 'src/app/pipes/filtro-programa.pipe';
import { FiltroUsuarioPipe } from 'src/app/pipes/filtro-usuario.pipe';
import { AdministracionRoutingModule } from './administracion-routing.module';
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
    CrearGrupoComponent,
    EditarGrupoComponent,
    BuscarGrupoComponent,
    EliminarGrupoComponent,
    BuscarUsuarioPorGrupoComponent,
    CrearUsuarioPorGrupoComponent,
    EditarUsuarioPorGrupoComponent,
    EliminarUsuarioPorGrupoComponent,
    FiltroUsuarioPipe,
    FiltroProgramaPipe,
    FiltroAsignaturaPipe,
    FiltroGrupoPipe,
    FiltroEstudiantesPipe,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class AdministracionModule {}
