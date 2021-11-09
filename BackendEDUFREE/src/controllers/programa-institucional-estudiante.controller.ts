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
  ProgramaInstitucional,
  Estudiante,
} from '../models';
import {ProgramaInstitucionalRepository} from '../repositories';

export class ProgramaInstitucionalEstudianteController {
  constructor(
    @repository(ProgramaInstitucionalRepository) protected programaInstitucionalRepository: ProgramaInstitucionalRepository,
  ) { }

  @get('/programa-institucionals/{id}/estudiantes', {
    responses: {
      '200': {
        description: 'Array of ProgramaInstitucional has many Estudiante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estudiante)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Estudiante>,
  ): Promise<Estudiante[]> {
    return this.programaInstitucionalRepository.estudiantes(id).find(filter);
  }

  @post('/programa-institucionals/{id}/estudiantes', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional model instance',
        content: {'application/json': {schema: getModelSchemaRef(Estudiante)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof ProgramaInstitucional.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {
            title: 'NewEstudianteInProgramaInstitucional',
            exclude: ['id'],
            optional: ['programaInstitucionalId']
          }),
        },
      },
    }) estudiante: Omit<Estudiante, 'id'>,
  ): Promise<Estudiante> {
    return this.programaInstitucionalRepository.estudiantes(id).create(estudiante);
  }

  @patch('/programa-institucionals/{id}/estudiantes', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional.Estudiante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {partial: true}),
        },
      },
    })
    estudiante: Partial<Estudiante>,
    @param.query.object('where', getWhereSchemaFor(Estudiante)) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.estudiantes(id).patch(estudiante, where);
  }

  @del('/programa-institucionals/{id}/estudiantes', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional.Estudiante DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Estudiante)) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.estudiantes(id).delete(where);
  }
}
