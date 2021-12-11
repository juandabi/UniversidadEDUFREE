import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoService } from 'src/app/servicios/grupo.service';

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
    this.EliminarGrupo();
  }

  EliminarGrupo() {
    this.servicioGrupo.EliminarGrupo(this.id).subscribe({
      next: (data) => {
        alert('Grupo eliminado');
        this.router.navigate(['/administracion/listar-grupos']);
      },
      error: (error) => {
        alert('Error al eliminar grupo');
        this.router.navigate(['/administracion/listar-grupos']);
      },
    });
  }
}
