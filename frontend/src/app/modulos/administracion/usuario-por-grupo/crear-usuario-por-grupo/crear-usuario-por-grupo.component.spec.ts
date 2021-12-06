import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioPorGrupoComponent } from './crear-usuario-por-grupo.component';

describe('CrearUsuarioPorGrupoComponent', () => {
  let component: CrearUsuarioPorGrupoComponent;
  let fixture: ComponentFixture<CrearUsuarioPorGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioPorGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioPorGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
