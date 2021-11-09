import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Grupo,
  Calificacion,
} from '../models';
import {GrupoRepository} from '../repositories';

export class GrupoCalificacionController {
  constructor(
    @repository(GrupoRepository) protected grupoRepository: GrupoRepository,
  ) { }

  @get('/grupos/{id}/calificacions', {
    responses: {
      '200': {
        description: 'Array of Grupo has many Calificacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Calificacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Calificacion>,
  ): Promise<Calificacion[]> {
    return this.grupoRepository.calificaciones(id).find(filter);
  }

  @post('/grupos/{id}/calificacions', {
    responses: {
      '200': {
        description: 'Grupo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Calificacion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Grupo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificacion, {
            title: 'NewCalificacionInGrupo',
            exclude: ['id'],
            optional: ['grupoId']
          }),
        },
      },
    }) calificacion: Omit<Calificacion, 'id'>,
  ): Promise<Calificacion> {
    return this.grupoRepository.calificaciones(id).create(calificacion);
  }

  @patch('/grupos/{id}/calificacions', {
    responses: {
      '200': {
        description: 'Grupo.Calificacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Calificacion, {partial: true}),
        },
      },
    })
    calificacion: Partial<Calificacion>,
    @param.query.object('where', getWhereSchemaFor(Calificacion)) where?: Where<Calificacion>,
  ): Promise<Count> {
    return this.grupoRepository.calificaciones(id).patch(calificacion, where);
  }

  @del('/grupos/{id}/calificacions', {
    responses: {
      '200': {
        description: 'Grupo.Calificacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Calificacion)) where?: Where<Calificacion>,
  ): Promise<Count> {
    return this.grupoRepository.calificaciones(id).delete(where);
  }
}
