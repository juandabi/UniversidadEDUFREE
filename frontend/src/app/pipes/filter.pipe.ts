import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class filterPipe implements PipeTransform {
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
      }
    }
    return resultadoUsuario;
  }
}
