import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPorGrupoService } from 'src/app/servicios/usuario-por-grupo.service';

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
    this.EliminarUsuarioPorGrupo();
  }

  EliminarUsuarioPorGrupo() {
    this.servicioUsuarioPorGrupo.EliminarUsuarioPorGrupo(this.id).subscribe({
      next: (data) => {
        alert('Usuario eliminado correctamente');
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
      error: (error) => {
        alert('Error al eliminar usuario');
        this.router.navigate(['/administracion/listar-usuarios-por-grupo']);
      },
    });
  }
}
