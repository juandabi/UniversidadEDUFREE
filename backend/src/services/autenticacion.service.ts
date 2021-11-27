/* eslint-disable @typescript-eslint/naming-convention */
import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
// const generador = require('password-generator');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    /* Add @inject to inject parameters */
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {}

  // DONE: QUITAR LA OPCIÓN DE GENERAR CLAVE
  /* GenerarClave() {
    const clave = generador(12, false);
    return clave;
  } */

  CifrarClave(clave: string) {
    const claveCifrada = CryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarUsuario(correo: string, clave: string) {
    try {
      const usuarioEncontrado = this.usuarioRepository.findOne({
        where: {correoElectronico: correo, clave: clave},
      });
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (usuarioEncontrado) {
        return usuarioEncontrado;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario) {
    const token = jwt.sign(
      {
        data: {
          id: usuario.id,
          nombres: usuario.nombres,
          apellidos: usuario.apellidos,
          correoElectronico: usuario.correoElectronico,
          perfilId: usuario.perfilId,
        },
      },
      Llaves.claveJWT,
    );
    return token;
  }

  ValidarTokenJWT(token: string) {
    try {
      const datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
