import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUsuarioPorGrupoComponent } from './eliminar-usuario-por-grupo.component';

describe('EliminarUsuarioPorGrupoComponent', () => {
  let component: EliminarUsuarioPorGrupoComponent;
  let fixture: ComponentFixture<EliminarUsuarioPorGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUsuarioPorGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUsuarioPorGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
