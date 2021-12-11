import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoService } from 'src/app/servicios/grupo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-grupo',
  templateUrl: './eliminar-grupo.component.html',
  styleUrls: ['./eliminar-grupo.component.css'],
})
export class EliminarGrupoComponent implements OnInit {
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioGrupo: GrupoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  EliminarGrupo() {
    this.servicioGrupo.EliminarGrupo(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Exito',
          'Se ha eliminado el grupo correctamente',
          'success')
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        Swal.fire(
          'Oppss',
          'Se ha presentado un error en la eliminacion del grupo',
          'error'
        )
        this.router.navigate(['/administracion/listar-grupos']);
      },
    });
  }

  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar el grupo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.EliminarGrupo()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-grupos']);
      }
  });
  }
}
