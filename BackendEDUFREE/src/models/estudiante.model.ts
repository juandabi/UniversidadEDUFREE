import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProgramaInstitucional} from './programa-institucional.model';
import {Calificacion} from './calificacion.model';

@model()
export class Estudiante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  correoElectronico: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @belongsTo(() => ProgramaInstitucional)
  programaInstitucionalId: string;

  @hasMany(() => Calificacion)
  calificaciones: Calificacion[];

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
