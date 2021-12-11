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
 ** SE PUEDE ASIGNAR COMO UN DICCIONARIO DE NOTAS, POR EJEMPLO:
 ** {"nota1": { "Nombre": "resumen pelicula", "Porcentaje": 0.1 }}
 ** {
 **   "nota1": {string , number},
 **   "nota2": {string , number},
 **   "nota3": {string , number},
 **   "nota4": {string , number},
 ** }
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
  })
  horario?: object[]; // e.g ['LoopBack', 4, true]

  @property({
    type: 'array',
    itemType: 'object',
  })
  actividades?: object[]; // e.g ['LoopBack', 4, true]v

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
