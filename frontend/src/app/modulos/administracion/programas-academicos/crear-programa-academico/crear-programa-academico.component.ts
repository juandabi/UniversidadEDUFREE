import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPrograma } from 'src/app/modelos/programa.modelo';
import { ProgramaAcademicoService } from 'src/app/servicios/programa-academico.service';

@Component({
  selector: 'app-crear-programa-academico',
  templateUrl: './crear-programa-academico.component.html',
  styleUrls: ['./crear-programa-academico.component.css'],
})
export class CrearProgramaAcademicoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    nivelFormacion: ['', [Validators.required]],
    totalCreditos: ['', [Validators.required]],
    duracion: ['', [Validators.required]],
    modalidad: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioProgramaAcademico: ProgramaAcademicoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarProgramaAcademico() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let nivelFormacion = this.fgValidador.controls['nivelFormacion'].value;
    let totalCreditos = parseInt(
      this.fgValidador.controls['totalCreditos'].value
    );
    let duracion = this.fgValidador.controls['duracion'].value;
    let modalidad = this.fgValidador.controls['modalidad'].value;
    let p = new ModeloPrograma();
    p.nombre = nombre;
    p.nivelFormacion = nivelFormacion;
    p.totalCreditos = totalCreditos;
    p.duracion = duracion;
    p.modalidad = modalidad;
    this.servicioProgramaAcademico.CrearPrograma(p).subscribe({
      next: (datos: ModeloPrograma) => {
        alert('Programa Académico Creado');
        this.router.navigate(['/administracion/listar-programas-academicos']);
      },
      error: (error) => {
        alert('Error al crear el programa academico');
      },
    });
  }
}
