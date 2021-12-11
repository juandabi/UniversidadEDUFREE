import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarProgramaAcademicoComponent } from './programas-academicos/buscar-programa-academico/buscar-programa-academico.component';
import { CrearProgramaAcademicoComponent } from './programas-academicos/crear-programa-academico/crear-programa-academico.component';
import { EliminarProgramaAcademicoComponent } from './programas-academicos/eliminar-programa-academico/eliminar-programa-academico.component';
import { EditarProgramaAcademicoComponent } from './programas-academicos/editar-programa-academico/editar-programa-academico.component';
import { GruposComponent } from './grupos/grupos.component';
import { EliminarGrupoComponent } from './grupos/eliminar-grupo/eliminar-grupo/eliminar-grupo.component';
import { CrearGruposComponent } from './grupos/crear-grupos/crear-grupos/crear-grupos.component';
import { EditarGrupoComponent } from './grupos/editar-grupos/editar-grupo/editar-grupo.component';

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
    GruposComponent,
    EliminarGrupoComponent,
    CrearGruposComponent,
    EditarGrupoComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdministracionModule {}
