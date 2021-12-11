import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsignatura } from 'src/app/modelos/asignatura.modelo';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css'],
})
export class CrearAsignaturaComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    creditos: ['', [Validators.required]],
    programaAcademicoId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private asignaturaService: AsignaturaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarAsignatura() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let creditos = parseInt(this.fgValidador.controls['creditos'].value);
    let programaAcademicoId =
      this.fgValidador.controls['programaAcademicoId'].value;
    let p = new ModeloAsignatura();
    p.nombre = nombre;
    p.creditos = creditos;
    p.programaAcademicoId = programaAcademicoId;
    this.asignaturaService.crearAsignatura(p).subscribe({
      next: (datos: ModeloAsignatura) => {
        alert('Asignatura creada con exito');
        this.router.navigate(['/administracion/listar-asignaturas']);
      },
      error: (error) => {
        alert('Error al crear la asignatura');
      },
    });
  }
}
