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
    this.EliminarUsuario();
  }

  EliminarUsuario() {
    this.servicioUsuario.EliminarUsuario(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Usuario eliminado');
        this.router.navigate(['/administracion/listar-usuarios']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Error al eliminar usuario');
      },
    });
  }
}
