import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramaAcademicoService } from 'src/app/servicios/programa-academico.service';
import Swal from 'sweetalert2'

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
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarProgramaAcademico();
  }

  EliminarProgramaAcademico() {
    this.servicioProgramaAcademico.EliminarPrograma(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'atencion',
          'el programa se ha eliminado correctamente',
          'success'
        )
        alert('programa academico eliminado');
        this.router.navigate(['/administracion/listar-programas-academicos']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al crear el nuevo usuario',
          'error'
        )
        alert('Error al eliminar programa academico');
      },
    });
  }
}
