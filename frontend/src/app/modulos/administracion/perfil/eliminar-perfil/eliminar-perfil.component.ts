import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/servicios/perfil.service';

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
    this.EliminarPerfil();
  }

  EliminarPerfil() {
    this.servicioPerfil.EliminarPerfil(this.id).subscribe({
      next: (data) => {
        alert('Perfil eliminado');
        this.router.navigate(['/administracion/listar-perfiles']);
      },
      error: (error) => {
        alert('Error al eliminar perfil');
      },
    });
  }
}
