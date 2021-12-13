import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEstudiantes',
})
export class FiltroEstudiantesPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoEstudiantes = [];
    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }
    arg = String(arg).toLowerCase();
    for (const usuario of value) {
      if (usuario.id.toLowerCase().indexOf(String(arg).toLowerCase()) > -1) {
        resultadoEstudiantes.push(usuario);
      } else if (
        usuario.nombres.toLowerCase().indexOf(String(arg).toLowerCase()) > -1
      ) {
        resultadoEstudiantes.push(usuario);
      } else if (
        usuario.apellidos.toLowerCase().indexOf(String(arg).toLowerCase()) > -1
      ) {
        resultadoEstudiantes.push(usuario);
      }
    }
    return resultadoEstudiantes;
  }
}
