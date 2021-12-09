import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsuario',
})
export class FiltroUsuarioPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoUsuario = [];
    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }

    for (const usuario of value) {
      if (usuario.id.indexOf(arg) > -1) {
        resultadoUsuario.push(usuario);
      } else if (
        usuario.nombres.toLowerCase().indexOf(String(arg).toLowerCase()) > -1
      ) {
        resultadoUsuario.push(usuario);
      } else if (
        usuario.apellidos.toLowerCase().indexOf(String(arg).toLowerCase()) > -1
      ) {
        resultadoUsuario.push(usuario);
      } else if (
        usuario.correoElectronico
          .toLowerCase()
          .indexOf(String(arg).toLowerCase()) > -1
      ) {
        resultadoUsuario.push(usuario);
      } else if (
        usuario.perfil.nombre.toLowerCase().indexOf(String(arg).toLowerCase()) >
        -1
      ) {
        resultadoUsuario.push(usuario);
      }
    }
    return resultadoUsuario;
  }
}
