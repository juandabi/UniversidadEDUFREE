import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGruposPorEstudianteComponent } from './buscar-grupos-por-estudiante.component';

describe('BuscarGruposPorEstudianteComponent', () => {
  let component: BuscarGruposPorEstudianteComponent;
  let fixture: ComponentFixture<BuscarGruposPorEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarGruposPorEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarGruposPorEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
