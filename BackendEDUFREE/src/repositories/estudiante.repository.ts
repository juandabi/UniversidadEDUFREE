import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Estudiante, EstudianteRelations, ProgramaInstitucional, Calificacion} from '../models';
import {ProgramaInstitucionalRepository} from './programa-institucional.repository';
import {CalificacionRepository} from './calificacion.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.id,
  EstudianteRelations
> {

  public readonly programaInstitucional: BelongsToAccessor<ProgramaInstitucional, typeof Estudiante.prototype.id>;

  public readonly calificaciones: HasManyRepositoryFactory<Calificacion, typeof Estudiante.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProgramaInstitucionalRepository') protected programaInstitucionalRepositoryGetter: Getter<ProgramaInstitucionalRepository>, @repository.getter('CalificacionRepository') protected calificacionRepositoryGetter: Getter<CalificacionRepository>,
  ) {
    super(Estudiante, dataSource);
    this.calificaciones = this.createHasManyRepositoryFactoryFor('calificaciones', calificacionRepositoryGetter,);
    this.registerInclusionResolver('calificaciones', this.calificaciones.inclusionResolver);
    this.programaInstitucional = this.createBelongsToAccessorFor('programaInstitucional', programaInstitucionalRepositoryGetter,);
    this.registerInclusionResolver('programaInstitucional', this.programaInstitucional.inclusionResolver);
  }
}
