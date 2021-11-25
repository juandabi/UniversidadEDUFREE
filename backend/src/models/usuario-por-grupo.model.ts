import {Entity, model, property} from '@loopback/repository';

// TODO: AGREGAR EL ATRIBUJO DE DOCENTE ASIGNADO AL GRUPO

/* TODO: CAMBIAR LA ESTRUCTURA DE LAS NOTAS ASIGNADA, PORCENTAJE Y CALIFICACIÓN
 ** SE PUEDE ASIGNAR COMO UN DICCIONARIO DE NOTAS, POR EJEMPLO:
 ** {"NOMBRE NOTA": { "Porcentaje": 0.0, "Calificación": 0.0 }}
 ** {
 **   "nota1": {0.5 , 5},
 **   "nota2": {0.2 , 3.5},
 **   "nota3": {0.2 , 3},
 **   "nota4": {0.1 , 4.5},
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
    type: 'number',
    required: true,
  })
  calificacion: number;

  @property({
    type: 'number',
    required: true,
  })
  porcentaje: number;

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
