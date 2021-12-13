import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPerfil } from 'src/app/modelos/perfil.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  listadoPerfiles: ModeloPerfil[] = [];

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
    private perfilServicio: PerfilService
  ) {}

  ngOnInit(): void {
    this.ObtenerPerfiles();
  }

  GuardarUsuario() {
    let id = this.fgValidador.controls['id'].value;
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let perfilId = this.fgValidador.controls['perfilId'].value;
    let p = new ModeloUsuario();
    p.id = id;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correoElectronico = correo;
    p.clave = clave;
    p.perfilId = perfilId;
    this.servicioUsuario.CrearUsuario(p).subscribe({
      next: (datos: ModeloUsuario) => {
        alert('Usuario creado correctamente');
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        alert('Error al crear el usuario');
      },
    });
  }
  ObtenerPerfiles() {
    this.perfilServicio.ObtenerPerfiles().subscribe((datos: ModeloPerfil[]) => {
      this.listadoPerfiles = datos;
    });
  }
}
