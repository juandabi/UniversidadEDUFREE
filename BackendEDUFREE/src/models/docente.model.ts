import {Entity, model, property, hasMany} from '@loopback/repository';
import {Grupo} from './grupo.model';

@model()
export class Docente extends Entity {
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

  @hasMany(() => Grupo)
  grupos: Grupo[];

  constructor(data?: Partial<Docente>) {
    super(data);
  }
}

export interface DocenteRelations {
  // describe navigational properties here
}

export type DocenteWithRelations = Docente & DocenteRelations;
