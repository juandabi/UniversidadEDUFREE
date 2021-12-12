import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarUsuario();
  }


  BuscarUsuario() {
    this.servicioUsuario.ObtenerUsuarioPorId(this.id).subscribe({
      next: (datos: ModeloUsuario) => {
        this.fgValidador.controls['clave'].setValue(datos.clave);
      },
      error: (error) => {},
    });
  }


  cambioClave() {
    let nuevaClave = this.fgValidador.controls['clave'].value;
    this.servicioUsuario.cambiarClave(this.id, nuevaClave).subscribe({
      next: (datos: ModeloUsuario) => {
        Swal.fire(
          'Exito',
          'Se ha actualizado la clave de manera correcta',
          'error')

        this.router.navigate(['/administracion/listar-usuarios']);

      },
      error: (error) => {
        Swal.fire(
        'Ohpps',
        'Se ha presentado un error al cambiar de clave',
        'error')
        this.router.navigate(['/seguridad/cambio-clave']);
      },
    });
  }



}
