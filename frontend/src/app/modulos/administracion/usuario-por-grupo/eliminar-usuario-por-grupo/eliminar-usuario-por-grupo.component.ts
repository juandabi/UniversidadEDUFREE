import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-usuario-por-grupo',
  templateUrl: './eliminar-usuario-por-grupo.component.html',
  styleUrls: ['./eliminar-usuario-por-grupo.component.css'],
})
export class EliminarUsuarioPorGrupoComponent implements OnInit {
  id: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioUsuarioPorGrupo: UsuarioPorGrupoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  EliminarUsuarioPorGrupo() {
    this.servicioUsuarioPorGrupo.EliminarUsuarioPorGrupo(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Exito',
          'El usuario por grupo se ha eliminado de manera correcta',
          'success'
        )
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
      error: (error) => {
        Swal.fire(
          'Oppss',
          'Se ha presentado un error en la eliminacion de usuario por grupo',
          'error'
        )
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
    });
  }

  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar el usuario por grupo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.EliminarUsuarioPorGrupo()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      }
  });
  }
}
