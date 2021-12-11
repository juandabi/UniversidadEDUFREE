import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroGrupo',
})
export class FiltroGrupoPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const resultadoGrupo = [];

    if (!value) {
      return [];
    }
    if (!arg) {
      return value;
    }
    arg = String(arg).toLowerCase();
    for (const grupo of value) {
      if (grupo.nombre.toLowerCase().indexOf(arg) > -1) {
        resultadoGrupo.push(grupo);
      } else if (grupo.docenteId.indexOf(arg) > -1) {
        resultadoGrupo.push(grupo);
      } else if (grupo.horario.toLowerCase().indexOf(arg) > -1) {
        resultadoGrupo.push(grupo);
      }
    }
    return resultadoGrupo;
  }
}
