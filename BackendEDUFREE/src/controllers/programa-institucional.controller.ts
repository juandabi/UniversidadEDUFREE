import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ProgramaInstitucional} from '../models';
import {ProgramaInstitucionalRepository} from '../repositories';

export class ProgramaInstitucionalController {
  constructor(
    @repository(ProgramaInstitucionalRepository)
    public programaInstitucionalRepository : ProgramaInstitucionalRepository,
  ) {}

  @post('/programas-institucionales')
  @response(200, {
    description: 'ProgramaInstitucional model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProgramaInstitucional)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProgramaInstitucional, {
            title: 'NewProgramaInstitucional',
            exclude: ['id'],
          }),
        },
      },
    })
    programaInstitucional: Omit<ProgramaInstitucional, 'id'>,
  ): Promise<ProgramaInstitucional> {
    return this.programaInstitucionalRepository.create(programaInstitucional);
  }

  @get('/programas-institucionales/count')
  @response(200, {
    description: 'ProgramaInstitucional model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProgramaInstitucional) where?: Where<ProgramaInstitucional>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.count(where);
  }

  @get('/programas-institucionales')
  @response(200, {
    description: 'Array of ProgramaInstitucional model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProgramaInstitucional, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProgramaInstitucional) filter?: Filter<ProgramaInstitucional>,
  ): Promise<ProgramaInstitucional[]> {
    return this.programaInstitucionalRepository.find(filter);
  }

  @patch('/programas-institucionales')
  @response(200, {
    description: 'ProgramaInstitucional PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProgramaInstitucional, {partial: true}),
        },
      },
    })
    programaInstitucional: ProgramaInstitucional,
    @param.where(ProgramaInstitucional) where?: Where<ProgramaInstitucional>,
  ): Promise<Count> {
    return this.programaInstitucionalRepository.updateAll(programaInstitucional, where);
  }

  @get('/programas-institucionales/{id}')
  @response(200, {
    description: 'ProgramaInstitucional model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProgramaInstitucional, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProgramaInstitucional, {exclude: 'where'}) filter?: FilterExcludingWhere<ProgramaInstitucional>
  ): Promise<ProgramaInstitucional> {
    return this.programaInstitucionalRepository.findById(id, filter);
  }

  @patch('/programas-institucionales/{id}')
  @response(204, {
    description: 'ProgramaInstitucional PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProgramaInstitucional, {partial: true}),
        },
      },
    })
    programaInstitucional: ProgramaInstitucional,
  ): Promise<void> {
    await this.programaInstitucionalRepository.updateById(id, programaInstitucional);
  }

  @put('/programas-institucionales/{id}')
  @response(204, {
    description: 'ProgramaInstitucional PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() programaInstitucional: ProgramaInstitucional,
  ): Promise<void> {
    await this.programaInstitucionalRepository.replaceById(id, programaInstitucional);
  }

  @del('/programas-institucionales/{id}')
  @response(204, {
    description: 'ProgramaInstitucional DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.programaInstitucionalRepository.deleteById(id);
  }
}
