import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario-por-grupo',
  templateUrl: './crear-usuario-por-grupo.component.html',
  styleUrls: ['./crear-usuario-por-grupo.component.css'],
})
export class CrearUsuarioPorGrupoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    usuarioId: ['', [Validators.required]],
    grupoId: ['', [Validators.required]],
    calificacion: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioUsuarioPorGrupo: UsuarioPorGrupoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarUsuarioPorGrupo() {
    let usuarioId = this.fgValidador.controls['usuarioId'].value;
    let grupoId = this.fgValidador.controls['grupoId'].value;
    let calificacion = this.fgValidador.controls['calificacion'].value;
    let p = new ModeloUsuarioPorGrupo();
    p.usuarioId = usuarioId;
    p.grupoId = grupoId;
    p.calificacion = calificacion;
    this.servicioUsuarioPorGrupo.CrearUsuarioPorGrupo(p).subscribe({
      next: (datos: ModeloUsuarioPorGrupo) => {
        Swal.fire(
          'Exito',
          'El usuario por grupo se ha creado de manera correcta',
          'success'
        )
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
      error: (error) => {
        Swal.fire(
          'Oppss',
          'Se ha oresentado un error en la creacion de usuario por grupo',
          'error'
        )
      },
    });
  }
}
