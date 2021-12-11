import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAsignaturaComponent } from './buscar-asignatura.component';

describe('BuscarAsignaturaComponent', () => {
  let component: BuscarAsignaturaComponent;
  let fixture: ComponentFixture<BuscarAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
