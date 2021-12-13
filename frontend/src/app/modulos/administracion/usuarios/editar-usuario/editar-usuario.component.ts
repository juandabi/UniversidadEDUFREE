import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPerfil } from 'src/app/modelos/perfil.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  listadoPerfiles: ModeloPerfil[] = [];
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    clave: ['', [Validators.required]],
    perfilId: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private perfilServicio: PerfilService
  ) {}

  ngOnInit(): void {
    this.ObtenerPerfiles();
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario();
  }

  BuscarUsuario() {
    this.servicioUsuario.ObtenerUsuarioPorId(this.id).subscribe({
      next: (datos: ModeloUsuario) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombres'].setValue(datos.nombres);
        this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
        this.fgValidador.controls['correo'].setValue(datos.correoElectronico);
        this.fgValidador.controls['clave'].setValue(datos.clave);
        this.fgValidador.controls['perfilId'].setValue(datos.perfilId);
      },
      error: (error) => {},
    });
  }

  EditarUsuario() {
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let perfilId = this.fgValidador.controls['perfilId'].value;
    let p = new ModeloUsuario();
    p.id = this.id;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correoElectronico = correo;
    p.clave = clave;
    p.perfilId = perfilId;
    this.servicioUsuario.ActualizarUsuario(p).subscribe({
      next: (datos: ModeloUsuario) => {
        alert('Usuario actualizado correctamente');
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        alert('Error al actualizar el usuario');
      },
    });
  }
  ObtenerPerfiles() {
    this.perfilServicio.ObtenerPerfiles().subscribe((datos: ModeloPerfil[]) => {
      this.listadoPerfiles = datos;
    });
  }
}
