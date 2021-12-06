import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';

@Component({
  selector: 'app-editar-usuario-por-grupo',
  templateUrl: './editar-usuario-por-grupo.component.html',
  styleUrls: ['./editar-usuario-por-grupo.component.css'],
})
export class EditarUsuarioPorGrupoComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    usuarioId: ['', [Validators.required]],
    grupoId: ['', [Validators.required]],
    calificacion: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicioUsuarioPorGrupo: UsuarioPorGrupoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuarioPorGrupo();
  }

  BuscarUsuarioPorGrupo() {
    this.servicioUsuarioPorGrupo
      .ObtenerUsuariosPorGrupoPorId(this.id)
      .subscribe({
        next: (datos: ModeloUsuarioPorGrupo) => {
          this.fgValidador.controls['usuarioId'].setValue(datos.usuarioId);
          this.fgValidador.controls['grupoId'].setValue(datos.grupoId);
          this.fgValidador.controls['calificacion'].setValue(
            datos.calificacion
          );
        },
        error: (error) => {},
      });
  }

  EditarUsuarioPorGrupo() {
    let usuarioId = this.fgValidador.controls['usuarioId'].value;
    let grupoId = this.fgValidador.controls['grupoId'].value;
    let calificacion = this.fgValidador.controls['calificacion'].value;
    let p = new ModeloUsuarioPorGrupo();
    p.id = this.id;
    p.usuarioId = usuarioId;
    p.grupoId = grupoId;
    p.calificacion = calificacion;
    this.servicioUsuarioPorGrupo.ActualizarUsuarioPorGrupo(p).subscribe({
      next: (datos: ModeloUsuarioPorGrupo) => {
        alert('Usuario por grupo actualizado');
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
      error: (error) => {
        alert('Error al actualizar usuario por grupo');
      },
    });
  }
}
