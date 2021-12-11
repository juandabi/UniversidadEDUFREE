import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsignatura } from 'src/app/modelos/asignatura.modelo';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Exito',
          'La asignatura se ha creado correctamente',
          'success')

        this.router.navigate(['/administracion/listar-asignaturas']);
      },
      error: (error) => {
        Swal.fire(
          'Ohpps',
          'Se ha presentado un error crear la asignatura',
          'error'  )
      },
    });
  }
}
