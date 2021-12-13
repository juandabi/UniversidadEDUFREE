import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupo.modelo';
import { GrupoService } from 'src/app/servicios/grupo.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css'],
})
export class CrearGrupoComponent implements OnInit {
  listadoDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  listadoHoras = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  listadoDuracion = [1, 2, 3, 4];
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    docenteId: ['', [Validators.required]],
    asignaturaId: [''],
    horarioDia1: ['', [Validators.required]],
    horarioHoraInicio1: ['', [Validators.required]],
    horarioDuracion1: ['', [Validators.required]],
    horarioDia2: [''],
    horarioHoraInicio2: [''],
    horarioDuracion2: [''],
    horarioDia3: [''],
    horarioHoraInicio3: [''],
    horarioDuracion3: [''],
    horarioDia4: [''],
    horarioHoraInicio4: [''],
    horarioDuracion4: [''],
  });
  asignaturaId: string = '';

  constructor(
    private fb: FormBuilder,
    private sevicioGrupo: GrupoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.asignaturaId = this.route.snapshot.params['asignaturaId'];

  }

  GuardarGrupo() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let docenteId = this.fgValidador.controls['docenteId'].value;

    let horarioDia1 = this.fgValidador.controls['horarioDia1'].value;
    let horarioHoraInicio1 =
      this.fgValidador.controls['horarioHoraInicio1'].value;
    let horarioDuracion1 = this.fgValidador.controls['horarioDuracion1'].value;
    let horarioDia2 = this.fgValidador.controls['horarioDia2'].value;
    let horarioHoraInicio2 =
      this.fgValidador.controls['horarioHoraInicio2'].value;
    let horarioDuracion2 = this.fgValidador.controls['horarioDuracion2'].value;
    let horarioDia3 = this.fgValidador.controls['horarioDia3'].value;
    let horarioHoraInicio3 =
      this.fgValidador.controls['horarioHoraInicio3'].value;
    let horarioDuracion3 = this.fgValidador.controls['horarioDuracion3'].value;
    let horarioDia4 = this.fgValidador.controls['horarioDia4'].value;
    let horarioHoraInicio4 =
      this.fgValidador.controls['horarioHoraInicio4'].value;
    let horarioDuracion4 = this.fgValidador.controls['horarioDuracion4'].value;

    let p = new ModeloGrupo();
    p.nombre = nombre;
    p.docenteId = docenteId;
    p.asignaturaId = this.asignaturaId;
    p.horario = [];
    if (horarioDia1 != '') {
      p.horario.push({
        dia: horarioDia1,
        horaInicio: horarioHoraInicio1,
        duracion: horarioDuracion1,
      });
      if (horarioDia2 != '') {
        p.horario.push({
          dia: horarioDia2,
          horaInicio: horarioHoraInicio2,
          duracion: horarioDuracion2,
        });
        if (horarioDia3 != '') {
          p.horario.push({
            dia: horarioDia3,
            horaInicio: horarioHoraInicio3,
            duracion: horarioDuracion3,
          });
          if (horarioDia4 != '') {
            p.horario.push({
              dia: horarioDia4,
              horaInicio: horarioHoraInicio4,
              duracion: horarioDuracion4,
            });
          }
        }
      }
    }
    this.sevicioGrupo.CrearGrupo(p).subscribe({
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
