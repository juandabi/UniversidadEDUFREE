import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
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
    private servicioSeguridad: SeguridadService
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

        alert('Usuario identificado');
      },
      error: (error) => {
        //KO
        alert('Usuario no identificado');
      },
    });
  }
}
