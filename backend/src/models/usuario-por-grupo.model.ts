import {Entity, model, property} from '@loopback/repository';

/* DONE: CAMBIAR LA ESTRUCTURA DE LAS NOTAS ASIGNADA, PORCENTAJE Y CALIFICACIÓN
 ** SE PUEDE ASIGNAR COMO UN DICCIONARIO DE NOTAS, POR EJEMPLO:
 ** {"nota1": 0.1 }
 ** {
 **   "nota1": number,
 **   "nota2": number,
 **   "nota3": number,
 **   "nota4": number,
 ** }
 */
@model()
export class UsuarioPorGrupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'object',
    required: false,
  })
  calificacion: object;

  @property({
    type: 'string',
  })
  grupoId?: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  constructor(data?: Partial<UsuarioPorGrupo>) {
    super(data);
  }
}

export interface UsuarioPorGrupoRelations {
  // describe navigational properties here
}

export type UsuarioPorGrupoWithRelations = UsuarioPorGrupo &
  UsuarioPorGrupoRelations;
