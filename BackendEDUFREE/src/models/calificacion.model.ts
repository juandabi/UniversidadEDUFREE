import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Grupo} from './grupo.model';
import {Estudiante} from './estudiante.model';

@model()
export class Calificacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  notas: number[];

  @property({
    type: 'number',
    required: true,
  })
  notaDefinitiva: number;

  @belongsTo(() => Grupo)
  grupoId: string;

  @belongsTo(() => Estudiante)
  estudianteId: string;

  constructor(data?: Partial<Calificacion>) {
    super(data);
  }
}

export interface CalificacionRelations {
  // describe navigational properties here
}

export type CalificacionWithRelations = Calificacion & CalificacionRelations;
