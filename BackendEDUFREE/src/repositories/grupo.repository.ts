import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Grupo, GrupoRelations, Asignatura, Docente, Calificacion} from '../models';
import {AsignaturaRepository} from './asignatura.repository';
import {DocenteRepository} from './docente.repository';
import {CalificacionRepository} from './calificacion.repository';

export class GrupoRepository extends DefaultCrudRepository<
  Grupo,
  typeof Grupo.prototype.id,
  GrupoRelations
> {

  public readonly asignatura: BelongsToAccessor<Asignatura, typeof Grupo.prototype.id>;

  public readonly docente: BelongsToAccessor<Docente, typeof Grupo.prototype.id>;

  public readonly calificaciones: HasManyRepositoryFactory<Calificacion, typeof Grupo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsignaturaRepository') protected asignaturaRepositoryGetter: Getter<AsignaturaRepository>, @repository.getter('DocenteRepository') protected docenteRepositoryGetter: Getter<DocenteRepository>, @repository.getter('CalificacionRepository') protected calificacionRepositoryGetter: Getter<CalificacionRepository>,
  ) {
    super(Grupo, dataSource);
    this.calificaciones = this.createHasManyRepositoryFactoryFor('calificaciones', calificacionRepositoryGetter,);
    this.registerInclusionResolver('calificaciones', this.calificaciones.inclusionResolver);
    this.docente = this.createBelongsToAccessorFor('docente', docenteRepositoryGetter,);
    this.registerInclusionResolver('docente', this.docente.inclusionResolver);
    this.asignatura = this.createBelongsToAccessorFor('asignatura', asignaturaRepositoryGetter,);
    this.registerInclusionResolver('asignatura', this.asignatura.inclusionResolver);
  }
}
