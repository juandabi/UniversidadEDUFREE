import {/* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const generador = require('password-generator');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    /* Add @inject to inject parameters */
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {}

  GenerarClave() {
    let clave = generador(12, false);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = CryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarUsuario(correo: string, clave: string) {
    try {
      let usuarioEncontrado = this.usuarioRepository.findOne({
        where: {correoElectronico: correo, clave: clave},
      });
      if (usuarioEncontrado) {
        return usuarioEncontrado;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign(
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
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
