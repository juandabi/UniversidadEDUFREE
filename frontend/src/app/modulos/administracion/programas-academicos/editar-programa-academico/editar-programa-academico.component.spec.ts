import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProgramaAcademicoComponent } from './editar-programa-academico.component';

describe('EditarProgramaAcademicoComponent', () => {
  let component: EditarProgramaAcademicoComponent;
  let fixture: ComponentFixture<EditarProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
