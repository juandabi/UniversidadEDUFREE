import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProgramaAcademicoComponent } from './buscar-programa-academico.component';

describe('BuscarProgramaAcademicoComponent', () => {
  let component: BuscarProgramaAcademicoComponent;
  let fixture: ComponentFixture<BuscarProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
