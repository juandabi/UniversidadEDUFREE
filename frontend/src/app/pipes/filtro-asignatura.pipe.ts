import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAsignatura',
})
export class FiltroAsignaturaPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoAsignatura = [];

    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }
    arg = String(arg).toLowerCase();
    for (const asignatura of value) {
      if (asignatura.nombre.toLowerCase().indexOf(arg) > -1) {
        resultadoAsignatura.push(asignatura);
      }
    }
    return resultadoAsignatura;
  }
}
