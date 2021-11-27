import { TestBed } from '@angular/core/testing';

import { ProgramaAcademicoService } from './programa-academico.service';

describe('ProgramaAcademicoService', () => {
  let service: ProgramaAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramaAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
