import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUsuarioPorGrupoComponent } from './buscar-usuario-por-grupo.component';

describe('BuscarUsuarioPorGrupoComponent', () => {
  let component: BuscarUsuarioPorGrupoComponent;
  let fixture: ComponentFixture<BuscarUsuarioPorGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUsuarioPorGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarUsuarioPorGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
