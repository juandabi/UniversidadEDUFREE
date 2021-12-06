import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css'],
})
export class EditarGrupoComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    docenteId: ['', [Validators.required]],
    horario: ['', [Validators.required]],
    asignaturaId: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private GrupoService: GrupoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarGrupo();
  }

  BuscarGrupo() {
    this.GrupoService.ObtenerGrupoPorId(this.id).subscribe({
      next: (datos: ModeloGrupo) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['docenteId'].setValue(datos.docenteId);
        this.fgValidador.controls['horario'].setValue(datos.horario);
        this.fgValidador.controls['asignaturaId'].setValue(datos.asignaturaId);
      },
      error: (error) => {},
    });
  }

  EditarGrupo() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let docenteId = this.fgValidador.controls['docenteId'].value;
    let horario = this.fgValidador.controls['horario'].value;
    let asignaturaId = this.fgValidador.controls['asignaturaId'].value;
    let p = new ModeloGrupo();
    p.id = this.id;
    p.nombre = nombre;
    p.docenteId = docenteId;
    p.horario = horario;
    p.asignaturaId = asignaturaId;
    this.GrupoService.ActualizarGrupo(p).subscribe({
      next: (datos: ModeloGrupo) => {
        alert('Grupo Actualizado');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        alert('Error al actualizar');
      },
    });
  }
}
