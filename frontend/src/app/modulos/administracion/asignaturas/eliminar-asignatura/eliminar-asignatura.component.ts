import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';

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
    this.EliminarAsignatura();
  }

  EliminarAsignatura() {
    this.servicioAsignatura.eliminarAsignatura(this.id).subscribe({
      next: (data) => {
        alert('Asignatura eliminada');
        this.router.navigate(['/administracion/listar-asignaturas']);
      },
      error: (error) => {
        alert('Error al eliminar la asignatura');
      },
    });
  }
}
