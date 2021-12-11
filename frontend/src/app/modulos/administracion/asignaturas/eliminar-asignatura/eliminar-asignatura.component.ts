import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-asignatura',
  templateUrl: './eliminar-asignatura.component.html',
  styleUrls: ['./eliminar-asignatura.component.css'],
})
export class EliminarAsignaturaComponent implements OnInit {
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioAsignatura: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  eliminarAsignatura() {
    this.servicioAsignatura.eliminarAsignatura(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Exito',
          'La asignatura se ha eliminado correctamente',
          'success')
        this.router.navigate(['/administracion/listar-asignaturas']);
      },
      error: (error) => {
        Swal.fire(
          'Ohpps',
          'Se ha presentado un error en la eliminacion de asignatura !',
          'error')
          this.router.navigate(['/administracion/listar-asignaturas']);
      },
    });
  }

  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar la asignatura?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.eliminarAsignatura()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-asignaturas']);
      }
  });
  }
}
