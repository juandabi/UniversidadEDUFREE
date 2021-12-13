import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEstudiantes',
})
export class FiltroEstudiantesPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoEstudiante = [];

    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }
    arg = String(arg).toLowerCase();
    for (const estudiante of value) {
      if (estudiante.id.indexOf(arg) > -1) {
        resultadoEstudiante.push(estudiante);
      }
      return resultadoEstudiante;
    }
  }
}
