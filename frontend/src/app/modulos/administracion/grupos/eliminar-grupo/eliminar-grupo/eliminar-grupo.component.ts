import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposService } from 'src/app/servicios/grupos-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-grupo',
  templateUrl: './eliminar-grupo.component.html',
  styleUrls: ['./eliminar-grupo.component.css']
})
export class EliminarGrupoComponent implements OnInit {
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioGrupo: GruposService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EliminarGrupos();
  }

  EliminarGrupos() {
    this.servicioGrupo.EliminarGrupo(this.id).subscribe({
      next: (data) => {
        Swal.fire(
          'Ohpss',
          'Ha eliminado el grupo',
          'warning'
        )
        alert('Grupo eliminado');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        Swal.fire(
          'lo sentimos',
          'ha ocurrido un error al eliminar el grupo',
          'error'
        )
        alert('Error al eliminar grupo');
      },
    });
  }
}

