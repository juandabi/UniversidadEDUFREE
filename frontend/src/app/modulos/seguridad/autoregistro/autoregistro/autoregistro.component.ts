import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autoregistro',
  templateUrl: './autoregistro.component.html',
  styleUrls: ['./autoregistro.component.css']
})
export class AutoregistroComponent implements OnInit {

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
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarUsuario() {
    let nombres = this.fgValidador.controls['nombres'].value;
    let id = this.fgValidador.controls['id'].value;
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
        Swal.fire(
          'Felicitaciones !!',
          'Su registro ha sido exitoso',
          'success'
        )
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'Se ha producido un error en el registro',
          'error'
        )
      },
    });
  }
}
