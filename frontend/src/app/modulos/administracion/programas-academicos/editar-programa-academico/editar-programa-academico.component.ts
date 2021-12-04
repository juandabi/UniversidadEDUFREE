import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPrograma } from 'src/app/modelos/programa.modelo';
import { ProgramaAcademicoService } from 'src/app/servicios/programa-academico.service';

@Component({
  selector: 'app-editar-programa-academico',
  templateUrl: './editar-programa-academico.component.html',
  styleUrls: ['./editar-programa-academico.component.css'],
})
export class EditarProgramaAcademicoComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    nivelFormacion: ['', [Validators.required]],
    totalCreditos: ['', [Validators.required]],
    duracion: ['', [Validators.required]],
    modalidad: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private servicioProgramaAcademico: ProgramaAcademicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProgramaAcademico();
  }

  BuscarProgramaAcademico() {
    this.servicioProgramaAcademico.ObtenerProgramaPorId(this.id).subscribe({
      next: (datos: ModeloPrograma) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['nivelFormacion'].setValue(
          datos.nivelFormacion
        );
        this.fgValidador.controls['totalCreditos'].setValue(
          datos.totalCreditos
        );
        this.fgValidador.controls['duracion'].setValue(datos.duracion);
        this.fgValidador.controls['modalidad'].setValue(datos.modalidad);
      },
      error: (error) => {},
    });
  }

  EditarProgramaAcademico() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let nivelFormacion = this.fgValidador.controls['nivelFormacion'].value;
    let totalCreditos = this.fgValidador.controls['totalCreditos'].value;
    let duracion = this.fgValidador.controls['duracion'].value;
    let modalidad = this.fgValidador.controls['modalidad'].value;
    let p = new ModeloPrograma();
    p.id = this.id;
    p.nombre = nombre;
    p.nivelFormacion = nivelFormacion;
    p.totalCreditos = totalCreditos;
    p.duracion = duracion;
    p.modalidad = modalidad;
    this.servicioProgramaAcademico.ActualizarPrograma(p).subscribe({
      next: (datos: ModeloPrograma) => {
        alert('Programa Actualizado');
        this.router.navigate(['/administracion/listar-programas-academicos']);
      },
      error: (error) => {
        alert('Error al Actualizar');
      },
    });
  }
}
