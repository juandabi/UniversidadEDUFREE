import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPrograma',
})
export class FiltroProgramaPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoPrograma = [];

    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }
    arg = String(arg).toLowerCase();
    for (const programa of value) {
      if (programa.nombre.toLowerCase().indexOf(arg) > -1) {
        resultadoPrograma.push(programa);
      } else if (programa.modalidad.toLowerCase().indexOf(arg) > -1) {
        resultadoPrograma.push(programa);
      } else if (programa.nivelFormacion.toLowerCase().indexOf(arg) > -1) {
        resultadoPrograma.push(programa);
      }
    }
    return resultadoPrograma;
  }
}
