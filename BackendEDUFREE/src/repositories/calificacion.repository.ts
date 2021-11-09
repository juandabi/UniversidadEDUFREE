import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Calificacion, CalificacionRelations, Grupo, Estudiante} from '../models';
import {GrupoRepository} from './grupo.repository';
import {EstudianteRepository} from './estudiante.repository';

export class CalificacionRepository extends DefaultCrudRepository<
  Calificacion,
  typeof Calificacion.prototype.id,
  CalificacionRelations
> {

  public readonly grupo: BelongsToAccessor<Grupo, typeof Calificacion.prototype.id>;

  public readonly estudiante: BelongsToAccessor<Estudiante, typeof Calificacion.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('GrupoRepository') protected grupoRepositoryGetter: Getter<GrupoRepository>, @repository.getter('EstudianteRepository') protected estudianteRepositoryGetter: Getter<EstudianteRepository>,
  ) {
    super(Calificacion, dataSource);
    this.estudiante = this.createBelongsToAccessorFor('estudiante', estudianteRepositoryGetter,);
    this.registerInclusionResolver('estudiante', this.estudiante.inclusionResolver);
    this.grupo = this.createBelongsToAccessorFor('grupo', grupoRepositoryGetter,);
    this.registerInclusionResolver('grupo', this.grupo.inclusionResolver);
  }
}
