import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css'],
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  identificarUsuario(): void {
    let correo = this.fgValidador.controls['correo'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();

    /* DONE: ENVIAR CLAVE ENCRIPTADA
     ** this.servicioSeguridad.Identificar(correo, claveCifrada)
     */

    this.servicioSeguridad.Identificar(correo, claveCifrada).subscribe({
      next: (datos: any) => {
        //OK
        this.servicioSeguridad.AlmacenarSesion(datos);
        this.router.navigate(['/inicio']);
        Swal.fire(
          'Exito',
          'El usuario ha sido indentificado',
          'success')
        // this.servicioSeguridad.AlmacenarSesion(datos);
      },
      error: (error) => {
        //KO
        Swal.fire(
          'Ohpps',
          'No se puede identificar el usuario',
          'error')
      },
    });
  }
}
