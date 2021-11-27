import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProgramaAcademicoComponent } from './eliminar-programa-academico.component';

describe('EliminarProgramaAcademicoComponent', () => {
  let component: EliminarProgramaAcademicoComponent;
  let fixture: ComponentFixture<EliminarProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
