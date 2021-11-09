import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ProgramaInstitucional, ProgramaInstitucionalRelations, Asignatura, Estudiante} from '../models';
import {AsignaturaRepository} from './asignatura.repository';
import {EstudianteRepository} from './estudiante.repository';

export class ProgramaInstitucionalRepository extends DefaultCrudRepository<
  ProgramaInstitucional,
  typeof ProgramaInstitucional.prototype.id,
  ProgramaInstitucionalRelations
> {

  public readonly asignaturas: HasManyRepositoryFactory<Asignatura, typeof ProgramaInstitucional.prototype.id>;

  public readonly estudiantes: HasManyRepositoryFactory<Estudiante, typeof ProgramaInstitucional.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsignaturaRepository') protected asignaturaRepositoryGetter: Getter<AsignaturaRepository>, @repository.getter('EstudianteRepository') protected estudianteRepositoryGetter: Getter<EstudianteRepository>,
  ) {
    super(ProgramaInstitucional, dataSource);
    this.estudiantes = this.createHasManyRepositoryFactoryFor('estudiantes', estudianteRepositoryGetter,);
    this.registerInclusionResolver('estudiantes', this.estudiantes.inclusionResolver);
    this.asignaturas = this.createHasManyRepositoryFactoryFor('asignaturas', asignaturaRepositoryGetter,);
    this.registerInclusionResolver('asignaturas', this.asignaturas.inclusionResolver);
  }
}
