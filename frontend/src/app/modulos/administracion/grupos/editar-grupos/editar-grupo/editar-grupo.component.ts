import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloGrupo } from 'src/app/modelos/grupos';
import { GruposService } from 'src/app/servicios/grupos-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit {

  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    docenteId: ['', [Validators.required]],
    horario: ['', [Validators.required]],
    actividades: ['', [Validators.required]],
    asignaturaId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioGrupo: GruposService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarGrupo();
  }

  BuscarGrupo() {
    this.servicioGrupo.ObtenerGrupoPorId(this.id).subscribe({
      next: (datos: ModeloGrupo) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['docenteId'].setValue(
          datos.docenteId
        );
        this.fgValidador.controls['horario'].setValue(
          datos.horario
        );
        this.fgValidador.controls['actividades'].setValue(datos.actividades);
        this.fgValidador.controls['asignaturaId'].setValue(datos.asignaturaId);
      },
      error: (error) => {},
    });
  }



  EditarGrupo() {
    let id = this.fgValidador.controls['id'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let docenteId = this.fgValidador.controls['docenteId'].value;
    let horario = this.fgValidador.controls['horario'].value;
    let actividaes = this.fgValidador.controls['actividades'].value;
    let asignaturaId = this.fgValidador.controls['asignaturaId'].value;

    
    let grupo = new ModeloGrupo();
    grupo.id = this.id;
    grupo.nombre = nombre;
    grupo.docenteId = docenteId;
    grupo.horario = horario;
    grupo.actividades = actividaes;
    grupo.asignaturaId = asignaturaId;


    this.servicioGrupo.ActualizarGrupo(grupo).subscribe({
      next: (datos: ModeloGrupo) => {
        Swal.fire(
          'ok',
          'El grupo se ha editado de manera correcta',
          'success'
        )
        alert('grupo Actualizado');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'No se pudo editar el grupo',
          'error'
        )
        alert('Error al Actualizar');
      },
    });
  }

}
