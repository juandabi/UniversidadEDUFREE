import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioPorGrupoComponent } from './editar-usuario-por-grupo.component';

describe('EditarUsuarioPorGrupoComponent', () => {
  let component: EditarUsuarioPorGrupoComponent;
  let fixture: ComponentFixture<EditarUsuarioPorGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioPorGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuarioPorGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
