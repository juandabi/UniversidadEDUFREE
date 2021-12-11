import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
    let id = this.fgValidador.controls['id'].value;
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
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Usuario actualizado correctamente');
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Error al actualizar el usuario');
      },
    });
  }
}
