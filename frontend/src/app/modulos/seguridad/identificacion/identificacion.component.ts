import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS = require('cryptojs');

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css'],
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.correo]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  identificarUsuario(): void {
    let correo = this.fgValidador.controls['correo'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = cryptoJS.md5(clave);
  }
}
