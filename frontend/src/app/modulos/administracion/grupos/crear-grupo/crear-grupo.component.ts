import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css'],
})
export class CrearGrupoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    docenteId: ['', [Validators.required]],
    horario: ['', [Validators.required]],
    asignaturaId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private sevicioGrupo: GrupoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarGrupo() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let docenteId = this.fgValidador.controls['docenteId'].value;
    let horario = this.fgValidador.controls['horario'].value;
    let asignaturaId = this.fgValidador.controls['asignaturaId'].value;

    let p = new ModeloGrupo();
    p.nombre = nombre;
    p.docenteId = docenteId;
    p.horario = horario;
    p.asignaturaId = asignaturaId;
    this.sevicioGrupo.CrearGrupo(p).subscribe({
      next: (datos: ModeloGrupo) => {
        Swal.fire(
          'Exito',
          'El grupo se ha generado de manera exitosa',
          'success'  )
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        Swal.fire(
          'Ohpps',
          'Se ha presentado un error en la creacion del grupo',
          'error'  )
      },
    });
  }
}
