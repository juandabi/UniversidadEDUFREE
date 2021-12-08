import { Pipe, PipeTransform } from '@angular/core';
import { ModeloUsuario } from '../modelos/usuario.modelo';

@Pipe({
  name: 'filtroUsuario',
})
export class FiltroUsuarioPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultadoUsuario: ModeloUsuario[] = [];
    for (const usuario of value) {
      if (usuario.titulo.indexOf(arg) > -1) {
        resultadoUsuario.push(usuario);
      }
    }
    return resultadoUsuario;
  }
}
