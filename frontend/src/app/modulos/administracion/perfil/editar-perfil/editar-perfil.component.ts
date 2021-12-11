import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPerfil } from 'src/app/modelos/perfil.modelo';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPerfil: PerfilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPerfil();
  }

  BuscarPerfil() {
    this.servicioPerfil.ObtenerPerfilPorId(this.id).subscribe({
      next: (datos: ModeloPerfil) => {
        this.fgValidador.controls['id'].setValue(this.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['descripcion'].setValue(datos.descripcion);
      },
      error: (error) => {},
    });
  }

  EditarPerfil() {
    let id = this.fgValidador.controls['id'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let p = new ModeloPerfil();
    p.id = this.id;
    p.nombre = nombre;
    p.descripcion = descripcion;
    this.servicioPerfil.ActualizarPerfil(p).subscribe({
      next: (datos: ModeloPerfil) => {
        alert('Perfil editado correctamente');
        this.router.navigate(['/administracion/listar-perfiles']);
      },
      error: (error) => {
        alert('Error al editar el perfil');
      },
    });
  }
}
