import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerListadoComponent } from './obtener-listado.component';

describe('ObtenerListadoComponent', () => {
  let component: ObtenerListadoComponent;
  let fixture: ComponentFixture<ObtenerListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
