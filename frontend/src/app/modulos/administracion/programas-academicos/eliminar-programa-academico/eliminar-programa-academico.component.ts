import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramaAcademicoService } from 'src/app/servicios/programa-academico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-programa-academico',
  templateUrl: './eliminar-programa-academico.component.html',
  styleUrls: ['./eliminar-programa-academico.component.css'],
})
export class EliminarProgramaAcademicoComponent implements OnInit {
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioProgramaAcademico: ProgramaAcademicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.confirmar();
  }

  EliminarProgramaAcademico() {
    this.servicioProgramaAcademico.EliminarPrograma(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Ok',
          'El programa academico se ha eliminado correctamente',
          'success'
        )
        this.router.navigate(['/administracion/listar-programas-academicos']);
      },
      error: (error) => {
        Swal.fire(
          'Oppss',
          'Se ha presentado un error en la eliminacion del programa academico',
          'error'
        )
        this.router.navigate(['/administracion/listar-programas-academicos']);
      },
    });
  }


  confirmar(){
    Swal .fire({
      title: "¡¡ ¿Esta seguro? !!",
      text: "¿Desea eliminar el programa acdemico?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this.EliminarProgramaAcademico()
      } else {
          // Dijeron que no
          Swal.fire(
            'Ok',
            'Se ha cancelado la eliminacion',
            'success'
          )
          this.router.navigate(['/administracion/listar-programas-academicos']);
      }
  });
  }

}
