import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Calificacion,
  Grupo,
} from '../models';
import {CalificacionRepository} from '../repositories';

export class CalificacionGrupoController {
  constructor(
    @repository(CalificacionRepository)
    public calificacionRepository: CalificacionRepository,
  ) { }

  @get('/calificacions/{id}/grupo', {
    responses: {
      '200': {
        description: 'Grupo belonging to Calificacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Grupo)},
          },
        },
      },
    },
  })
  async getGrupo(
    @param.path.string('id') id: typeof Calificacion.prototype.id,
  ): Promise<Grupo> {
    return this.calificacionRepository.grupo(id);
  }
}
