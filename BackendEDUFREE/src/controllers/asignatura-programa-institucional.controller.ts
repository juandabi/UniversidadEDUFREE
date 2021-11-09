import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Asignatura,
  ProgramaInstitucional,
} from '../models';
import {AsignaturaRepository} from '../repositories';

export class AsignaturaProgramaInstitucionalController {
  constructor(
    @repository(AsignaturaRepository)
    public asignaturaRepository: AsignaturaRepository,
  ) { }

  @get('/asignaturas/{id}/programa-institucional', {
    responses: {
      '200': {
        description: 'ProgramaInstitucional belonging to Asignatura',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ProgramaInstitucional)},
          },
        },
      },
    },
  })
  async getProgramaInstitucional(
    @param.path.string('id') id: typeof Asignatura.prototype.id,
  ): Promise<ProgramaInstitucional> {
    return this.asignaturaRepository.programaInstitucional(id);
  }
}
