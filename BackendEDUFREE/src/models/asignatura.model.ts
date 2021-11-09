import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProgramaInstitucional} from './programa-institucional.model';
import {Grupo} from './grupo.model';

@model()
export class Asignatura extends Entity {
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
  intensidad: string;

  @belongsTo(() => ProgramaInstitucional)
  programaInstitucionalId: string;

  @hasMany(() => Grupo)
  grupos: Grupo[];

  constructor(data?: Partial<Asignatura>) {
    super(data);
  }
}

export interface AsignaturaRelations {
  // describe navigational properties here
}

export type AsignaturaWithRelations = Asignatura & AsignaturaRelations;
