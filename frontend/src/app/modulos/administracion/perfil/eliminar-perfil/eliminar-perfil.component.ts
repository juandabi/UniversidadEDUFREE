import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/servicios/perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-perfil',
  templateUrl: './eliminar-perfil.component.html',
  styleUrls: ['./eliminar-perfil.component.css'],
})
export class EliminarPerfilComponent implements OnInit {
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private servicioPerfil: PerfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  EliminarPerfil() {
    this.servicioPerfil.EliminarPerfil(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Exito',
          'El perfil se ha eliminado correctamente',
          'success'
        )
        this.router.navigate(['/administracion/listar-perfiles']);
      },
      error: (error) => {
        Swal.fire(
          'Ok',
          'Se ha presentado un error en la eliminacion del perfil',
          'error'
        )
        this.router.navigate(['/administracion/listar-perfiles']);
      },
    });
  }

  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar el perfil?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.EliminarPerfil()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-perfiles']);
      }
  });
  }
}
