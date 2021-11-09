import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Asignatura} from './asignatura.model';
import {Docente} from './docente.model';
import {Calificacion} from './calificacion.model';

@model()
export class Grupo extends Entity {
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
    type: 'object',
    required: true,
  })
  Horario: object;

  @belongsTo(() => Asignatura)
  asignaturaId: string;

  @belongsTo(() => Docente)
  docenteId: string;

  @hasMany(() => Calificacion)
  calificaciones: Calificacion[];

  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
