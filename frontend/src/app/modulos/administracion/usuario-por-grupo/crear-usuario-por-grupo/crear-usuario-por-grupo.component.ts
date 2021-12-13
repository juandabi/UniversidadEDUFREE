import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';

@Component({
  selector: 'app-crear-usuario-por-grupo',
  templateUrl: './crear-usuario-por-grupo.component.html',
  styleUrls: ['./crear-usuario-por-grupo.component.css'],
})
export class CrearUsuarioPorGrupoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    usuarioId: ['', [Validators.required]],
    grupoId: ['', [Validators.required]],
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
    let p = new ModeloUsuarioPorGrupo();
    p.usuarioId = usuarioId;
    p.grupoId = grupoId;
    this.servicioUsuarioPorGrupo.CrearUsuarioPorGrupo(p).subscribe({
      next: (datos: ModeloUsuarioPorGrupo) => {
        alert('UsuarioPorGrupo creado exitosamente');
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
      error: (error) => {
        alert('Error al crear UsuarioPorGrupo');
      },
    });
  }
}
