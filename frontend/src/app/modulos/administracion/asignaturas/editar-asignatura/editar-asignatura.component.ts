import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsignatura } from 'src/app/modelos/asignatura.modelo';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-asignatura',
  templateUrl: './editar-asignatura.component.html',
  styleUrls: ['./editar-asignatura.component.css'],
})
export class EditarAsignaturaComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    creditos: ['', [Validators.required]],
    programaAcademicoId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioAsignatura: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarAsignatura();
  }

  BuscarAsignatura() {
    this.servicioAsignatura.ObtenerAsignaturaPorId(this.id).subscribe({
      next: (datos: ModeloAsignatura) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['creditos'].setValue(datos.creditos);
        this.fgValidador.controls['programaAcademicoId'].setValue(
          datos.programaAcademicoId
        );
      },
      error: (error) => {},
    });
  }

  EditarAsignatura() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let creditos = this.fgValidador.controls['creditos'].value;
    let programaAcademicoId =
      this.fgValidador.controls['programaAcademicoId'].value;
    let p = new ModeloAsignatura();
    p.id = this.id;
    p.nombre = nombre;
    p.creditos = creditos;
    p.programaAcademicoId = programaAcademicoId;
    this.servicioAsignatura.ActualizarAsignatura(p).subscribe({
      next: (datos: ModeloAsignatura) => {
        Swal.fire(
          'Exito',
          'La asignatura se ha actualizado correctamente',
          'success'  )
        this.router.navigate(['/administracion/listar-asignaturas']);
      },
      error: (error) => {
        Swal.fire(
          'Ohpps',
          'Se ha presentado un error en la edicion de ¡ asignatura !',
          'error'  )
      },
    });
  }
}
