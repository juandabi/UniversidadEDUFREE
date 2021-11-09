import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asignatura, AsignaturaRelations, ProgramaInstitucional, Grupo} from '../models';
import {ProgramaInstitucionalRepository} from './programa-institucional.repository';
import {GrupoRepository} from './grupo.repository';

export class AsignaturaRepository extends DefaultCrudRepository<
  Asignatura,
  typeof Asignatura.prototype.id,
  AsignaturaRelations
> {

  public readonly programaInstitucional: BelongsToAccessor<ProgramaInstitucional, typeof Asignatura.prototype.id>;

  public readonly grupos: HasManyRepositoryFactory<Grupo, typeof Asignatura.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ProgramaInstitucionalRepository') protected programaInstitucionalRepositoryGetter: Getter<ProgramaInstitucionalRepository>, @repository.getter('GrupoRepository') protected grupoRepositoryGetter: Getter<GrupoRepository>,
  ) {
    super(Asignatura, dataSource);
    this.grupos = this.createHasManyRepositoryFactoryFor('grupos', grupoRepositoryGetter,);
    this.registerInclusionResolver('grupos', this.grupos.inclusionResolver);
    this.programaInstitucional = this.createBelongsToAccessorFor('programaInstitucional', programaInstitucionalRepositoryGetter,);
    this.registerInclusionResolver('programaInstitucional', this.programaInstitucional.inclusionResolver);
  }
}
