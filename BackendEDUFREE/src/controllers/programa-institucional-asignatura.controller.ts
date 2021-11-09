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
  Asignatura,
} from '../models';
import {ProgramaInstitucionalRepository} from '../repositories';

export class ProgramaInstitucionalAsignaturaController {
  constructor(
    @repository(ProgramaInstitucionalRepository) protected programaInstitucionalRepository: ProgramaInstitucionalRepository,
  ) { }

  @get('/programa-institucionals/{id}/asignaturas', {
    responses: {
      '200': {
        description: 'Array of ProgramaInstitucional has many Asignatura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Asignatura)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Asignatura>,
  ): Promise<Asignatura[]> {
    return this.programaInstitucionalRepository.asignaturas(id).find(filter);
  }

  @post('/programa-institucionals/{id}/asignaturas', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asignatura)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof ProgramaInstitucional.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asignatura, {
            title: 'NewAsignaturaInProgramaInstitucional',
            exclude: ['id'],
            optional: ['programaInstitucionalId']
          }),
        },
      },
    }) asignatura: Omit<Asignatura, 'id'>,
  ): Promise<Asignatura> {
    return this.programaInstitucionalRepository.asignaturas(id).create(asignatura);
  }

  @patch('/programa-institucionals/{id}/asignaturas', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional.Asignatura PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asignatura, {partial: true}),
        },
      },
    })
    asignatura: Partial<Asignatura>,
    @param.query.object('where', getWhereSchemaFor(Asignatura)) where?: Where<Asignatura>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.asignaturas(id).patch(asignatura, where);
  }

  @del('/programa-institucionals/{id}/asignaturas', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional.Asignatura DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asignatura)) where?: Where<Asignatura>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.asignaturas(id).delete(where);
  }
}
