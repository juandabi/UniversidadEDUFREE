import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css'],
})
export class EliminarUsuarioComponent implements OnInit {
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  eliminarUsuario() {
    this.servicioUsuario.eliminarUsuario(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'ok',
          'El usuario se ha eliminado de manera exitosa',
          'success'
        )
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        Swal.fire(
          'Ohpps',
          'Se ha presentado un error al eliminar el usuario',
          'error'  )
          this.router.navigate(['/administracion/listar-usuarios']);
      },
    });
  }

  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar el usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.eliminarUsuario()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-usuarios']);
      }
  });
  }
}
