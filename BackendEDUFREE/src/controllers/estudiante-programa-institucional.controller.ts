import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Estudiante,
  ProgramaInstitucional,
} from '../models';
import {EstudianteRepository} from '../repositories';

export class EstudianteProgramaInstitucionalController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
  ) { }

  @get('/estudiantes/{id}/programa-institucional', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional belonging to Estudiante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProgramaInstitucional)},
          },
        },
      },
    },
  })
  async getProgramaInstitucional(
    @param.path.string('id') id: typeof Estudiante.prototype.id,
  ): Promise<ProgramaInstitucional> {
    return this.estudianteRepository.programaInstitucional(id);
  }
}
