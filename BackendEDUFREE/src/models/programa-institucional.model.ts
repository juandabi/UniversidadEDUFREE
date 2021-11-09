import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asignatura} from './asignatura.model';
import {Estudiante} from './estudiante.model';

@model()
export class ProgramaInstitucional extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelFormacion: string;

  @hasMany(() => Asignatura)
  asignaturas: Asignatura[];

  @hasMany(() => Estudiante)
  estudiantes: Estudiante[];

  constructor(data?: Partial<ProgramaInstitucional>) {
    super(data);
  }
}

export interface ProgramaInstitucionalRelations {
  // describe navigational properties here
}

export type ProgramaInstitucionalWithRelations = ProgramaInstitucional & ProgramaInstitucionalRelations;
