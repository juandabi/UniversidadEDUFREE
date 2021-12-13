import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ModalModule } from '@bit/valor-software.ngx-bootstrap.modal';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { BuscarGruposPorEstudianteComponent } from './grupos/buscar-grupos-por-estudiante/buscar-grupos-por-estudiante.component';

@NgModule({
  declarations: [BuscarGruposPorEstudianteComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ModalModule.forRoot(),
  ],
})
export class EstudianteModule {}
