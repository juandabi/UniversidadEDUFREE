import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { ModeloUsuarioPorGrupo } from 'src/app/modelos/usuarioPorGrupo.modelo';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario-por-grupo',
  templateUrl: './crear-usuario-por-grupo.component.html',
  styleUrls: ['./crear-usuario-por-grupo.component.css'],
})
export class CrearUsuarioPorGrupoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    usuarioId: ['', [Validators.required]],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required]],
  });
  grupoId: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioUsuarioPorGrupo: UsuarioPorGrupoService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioUsuario: UsuarioService
  ) {}

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.params['grupoId'];
  }

  GuardarUsuarioPorGrupo() {
    console.log('GuardarUsuarioPorGrupo');
    let usuarioId = this.fgValidador.controls['usuarioId'].value;
    let p = new ModeloUsuarioPorGrupo();
    p.usuarioId = usuarioId;
    p.grupoId = this.grupoId;
    this.servicioUsuarioPorGrupo.CrearUsuarioPorGrupo(p).subscribe({
      next: (datos: ModeloUsuarioPorGrupo) => {
        alert('Estudiante agregado exitosamente');
        this.router.navigate([
          `/administracion/listar-usuarios-por-grupo/${this.grupoId}`,
        ]);
      },
      error: (error) => {
        alert('Error al crear UsuarioPorGrupo');
      },
    });
  }
  BuscarUsuario() {
    let id = this.fgValidador.controls['usuarioId'].value;

    console.log('BuscarUsuario');
    console.log(id);
    this.servicioUsuario.ObtenerUsuarioPorId(id).subscribe({
      next: (datos: ModeloUsuario) => {
        this.fgValidador.controls['nombres'].setValue(datos.nombres);
        this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
        this.fgValidador.controls['correo'].setValue(datos.correoElectronico);
      },
      error: (error) => {},
    });
  }
}
