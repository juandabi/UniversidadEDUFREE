import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Perfil} from './perfil.model';
import {Grupo} from './grupo.model';
import {UsuarioPorGrupo} from './usuario-por-grupo.model';

@model()
export class Usuario extends Entity {
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

  @belongsTo(() => Perfil)
  perfilId: string;

  @hasMany(() => Grupo, {through: {model: () => UsuarioPorGrupo}})
  grupos: Grupo[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
