import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

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
    private grupoService: GrupoService,
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
    this.grupoService.CrearGrupo(p).subscribe({
      next: (datos: ModeloGrupo) => {
        alert('Grupo creada con exito');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        alert('Error al crear la grupo');
      },
    });
  }
}
