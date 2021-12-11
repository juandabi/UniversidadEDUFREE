import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupos';
import { GruposService } from 'src/app/servicios/grupos-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-grupos',
  templateUrl: './crear-grupos.component.html',
  styleUrls: ['./crear-grupos.component.css']
})
export class CrearGruposComponent implements OnInit {
  
  fgValidador: FormGroup = this.fb.group({

    nombre: ['', [Validators.required]],
    docente: ['', [Validators.required]],
    horario: [JSON.stringify(""), [Validators.required]],
    actividades: [JSON.stringify(""), [Validators.required]],
    asignatura: ['', [Validators.required]],
    
  });

  constructor(
    private fb: FormBuilder,
    private servicioGrupo: GruposService,
    private router: Router) { }

  ngOnInit(): void {
  }


  GuardarGrupo() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let docente = this.fgValidador.controls['docenteId'].value;
    let horario = this.fgValidador.controls['horario'].value;
    let actividades = this.fgValidador.controls['actividades'].value;
    let asignatura = this.fgValidador.controls['asignaturaId'].value;


    let grupo = new ModeloGrupo();

    grupo.nombre = nombre;
    grupo.docenteId = docente;
    grupo.horario = horario;
    grupo.actividades = actividades;
    grupo.asignaturaId = asignatura;


    this.servicioGrupo.CrearGrupo(grupo).subscribe({
      next: (datos: ModeloGrupo) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Grupo Creado');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Error al crear el grupo');
      },
    });
  }
}
