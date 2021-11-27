import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProgramaAcademicoComponent } from './crear-programa-academico.component';

describe('CrearProgramaAcademicoComponent', () => {
  let component: CrearProgramaAcademicoComponent;
  let fixture: ComponentFixture<CrearProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
