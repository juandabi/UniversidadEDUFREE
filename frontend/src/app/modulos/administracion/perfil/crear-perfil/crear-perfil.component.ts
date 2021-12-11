import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPerfil } from 'src/app/modelos/perfil.modelo';
import { PerfilService } from 'src/app/servicios/perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css'],
})
export class CrearPerfilComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioPerfil: PerfilService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  GuardarPerfil() {
    let id = this.fgValidador.controls['id'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let p = new ModeloPerfil();
    p.id = id;
    p.nombre = nombre;
    p.descripcion = descripcion;
    this.servicioPerfil.CrearPerfil(p).subscribe({
      next: (datos: ModeloPerfil) => {
        Swal.fire(
          'Exito',
          'El perfil se ha creado correctamente',
          'success'
        )
        this.router.navigate(['/administracion/listar-perfiles']);
      },
      error: (error) => {
        Swal.fire(
          'Oppss',
          'Se ha presentado un error en la creacion del perfil',
          'error'
        )
      },
    });
  }
}
