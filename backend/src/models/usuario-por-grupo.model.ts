import {Entity, model, property} from '@loopback/repository';

/* DONE: CAMBIAR LA ESTRUCTURA DE LAS NOTAS ASIGNADA, PORCENTAJE Y CALIFICACIÓN
 ** SE PUEDE ASIGNAR COMO UN ARRAY, DONDE EL INDEX DEL ARRAY ES LA UBICACIÓN CON EL ARRAY DEL GRUPO, DONDE SE ESPECIFICA LA ACTIVIDAD,  POR EJEMPLO:
 ** [1.5,2,5,4]
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
    type: 'array',
    itemType: 'number',
    required: false,
  })
  calificacion: number[];
  // calificación = [1,2,3,4,5] NOTA DE 0 A 5

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
