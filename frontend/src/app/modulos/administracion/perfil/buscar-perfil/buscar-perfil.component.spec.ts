import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPerfilComponent } from './buscar-perfil.component';

describe('BuscarPerfilComponent', () => {
  let component: BuscarPerfilComponent;
  let fixture: ComponentFixture<BuscarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
