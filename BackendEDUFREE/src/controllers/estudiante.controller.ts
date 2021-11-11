import {service} from '@loopback/core';
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
import {Estudiante} from '../models';
import {EstudianteRepository} from '../repositories';
import {AutenticacionService} from '../services';
import foo from 'node-fetch';
export class EstudianteController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) {}

  @post('/estudiantes')
  @response(200, {
    description: 'Estudiante model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estudiante)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {
            title: 'NewEstudiante',
            exclude: ['id'],
          }),
        },
      },
    })
    estudiante: Omit<Estudiante, 'id'>,
  ): Promise<Estudiante> {
    let clave = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    estudiante.clave = claveCifrada;
    let estudianteCreado = await this.estudianteRepository.create(estudiante);

    //Notificar al usuario
    let destino = estudiante.correoElectronico;
    let asunto = 'Registro en la plataforma';
    let contenido = `Hola ${estudiante.nombres}, su nombre de usuario es: ${estudiante.correoElectronico}`;

    foo(
      `http://127.0.0.1:5000/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`,
    ).then((data: any) => {
      console.log(data);
    });
    return estudianteCreado;
  }

  @get('/estudiantes/count')
  @response(200, {
    description: 'Estudiante model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estudiante) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.estudianteRepository.count(where);
  }

  @get('/estudiantes')
  @response(200, {
    description: 'Array of Estudiante model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estudiante, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estudiante) filter?: Filter<Estudiante>,
  ): Promise<Estudiante[]> {
    return this.estudianteRepository.find(filter);
  }

  @patch('/estudiantes')
  @response(200, {
    description: 'Estudiante PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {partial: true}),
        },
      },
    })
    estudiante: Estudiante,
    @param.where(Estudiante) where?: Where<Estudiante>,
  ): Promise<Count> {
    return this.estudianteRepository.updateAll(estudiante, where);
  }

  @get('/estudiantes/{id}')
  @response(200, {
    description: 'Estudiante model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estudiante, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Estudiante, {exclude: 'where'})
    filter?: FilterExcludingWhere<Estudiante>,
  ): Promise<Estudiante> {
    return this.estudianteRepository.findById(id, filter);
  }

  @patch('/estudiantes/{id}')
  @response(204, {
    description: 'Estudiante PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estudiante, {partial: true}),
        },
      },
    })
    estudiante: Estudiante,
  ): Promise<void> {
    await this.estudianteRepository.updateById(id, estudiante);
  }

  @put('/estudiantes/{id}')
  @response(204, {
    description: 'Estudiante PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() estudiante: Estudiante,
  ): Promise<void> {
    await this.estudianteRepository.replaceById(id, estudiante);
  }

  @del('/estudiantes/{id}')
  @response(204, {
    description: 'Estudiante DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.estudianteRepository.deleteById(id);
  }
}
