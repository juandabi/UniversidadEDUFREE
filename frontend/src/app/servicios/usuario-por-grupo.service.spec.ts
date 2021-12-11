import { TestBed } from '@angular/core/testing';

import { UsuarioPorGrupoService } from './usuario-por-grupo.service';

describe('UsuarioPorGrupoService', () => {
  let service: UsuarioPorGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioPorGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
