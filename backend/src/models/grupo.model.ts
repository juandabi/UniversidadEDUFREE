import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Asignatura} from './asignatura.model';
import {UsuarioPorGrupo} from './usuario-por-grupo.model';
import {Usuario} from './usuario.model';

// DONE: CREAR EL ATRIBUTO DE DOCENTE ASIGNADO AL GRUPO

/* DONE: CAMBIAR LA ESTRUCTURA DE LAS NOTAS ASIGNADA, PORCENTAJE Y CALIFICACIÓN
 ** SE PUEDE ASIGNAR COMO UN ARRAY DE OBJETOS, DONDE EL INDEX DEL ARRAY UBICA EL NUMERO DE LA NOTA, Y EL OBJETO TIENE EL NOMBRE DE LA ACTIVIDAD Y SU PORCENTAJE. POR EJEMPLO:
 ** [{'RESUMEN PELICULA': 0.2},{'PARCIAL 1': 0.3}]
 */

@model()
export class Grupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: false,
  })
  docenteId: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  horario: object[];
  // HORARIO: [{'dia': [horaInicio, duracion]}] HORA MILITAR
  // HORARIO: [{'Lunes': [10, 2]}]

  @property({
    type: 'array',
    itemType: 'object',
    required: false,
  })
  actividades: object[];
  //[{'nombre nota 1': porcentaje},{'nombre nota 2': porcentaje}]
  // [{'RESUMEN PELICULA': 0.2},{'PARCIAL 1': 0.3}]

  @belongsTo(() => Asignatura)
  asignaturaId: string;

  @hasMany(() => Usuario, {through: {model: () => UsuarioPorGrupo}})
  usuarios: Usuario[];

  constructor(data?: Partial<Grupo>) {
    super(data);
  }
}

export interface GrupoRelations {
  // describe navigational properties here
}

export type GrupoWithRelations = Grupo & GrupoRelations;
