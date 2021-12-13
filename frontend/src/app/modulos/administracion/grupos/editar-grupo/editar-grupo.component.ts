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

  constructor(
    private fb: FormBuilder,
    private servicioGrupo: GrupoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarGrupo();
  }

  BuscarGrupo() {
    let ModeloHorario: Array<any> = [];
    this.servicioGrupo.ObtenerGrupoPorId(this.id).subscribe({
      next: (datos: ModeloGrupo) => {
        datos.horario?.forEach((element) => {
          ModeloHorario.push(element);
        });

        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['docenteId'].setValue(datos.docenteId);
        this.fgValidador.controls['asignaturaId'].setValue(datos.asignaturaId);

        this.fgValidador.controls['horarioDia1'].setValue(
          ModeloHorario[0]['dia']
        );
        this.fgValidador.controls['horarioHoraInicio1'].setValue(
          ModeloHorario[0]['horaInicio']
        );
        this.fgValidador.controls['horarioDuracion1'].setValue(
          ModeloHorario[0]['duracion']
        );
        if (ModeloHorario.length > 1) {
          this.fgValidador.controls['horarioDia2'].setValue(
            ModeloHorario[1]['dia']
          );

          this.fgValidador.controls['horarioHoraInicio2'].setValue(
            ModeloHorario[1]['horaInicio']
          );
          this.fgValidador.controls['horarioDuracion2'].setValue(
            ModeloHorario[1]['duracion']
          );
        }
        if (ModeloHorario.length > 2) {
          this.fgValidador.controls['horarioDia3'].setValue(
            ModeloHorario[2]['dia']
          );
          this.fgValidador.controls['horarioHoraInicio3'].setValue(
            ModeloHorario[2]['horaInicio']
          );
          this.fgValidador.controls['horarioDuracion3'].setValue(
            ModeloHorario[2]['duracion']
          );
        }
        if (ModeloHorario.length > 3) {
          this.fgValidador.controls['horarioDia4'].setValue(
            ModeloHorario[3]['dia']
          );
          this.fgValidador.controls['horarioHoraInicio4'].setValue(
            ModeloHorario[3]['horaInicio']
          );
          this.fgValidador.controls['horarioDuracion4'].setValue(
            ModeloHorario[3]['duracion']
          );
        }
      },
      error: (error) => {},
    });
  }

  EditarGrupo() {
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

    let asignaturaId = this.fgValidador.controls['asignaturaId'].value;
    let p = new ModeloGrupo();
    p.id = this.id;
    p.nombre = nombre;
    p.docenteId = docenteId;
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
    p.asignaturaId = asignaturaId;
    this.servicioGrupo.ActualizarGrupo(p).subscribe({
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
