import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidarValorSalidaComponent } from './liquidar-valor-salida.component';

describe('LiquidarValorSalidaComponent', () => {
  let component: LiquidarValorSalidaComponent;
  let fixture: ComponentFixture<LiquidarValorSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidarValorSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidarValorSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
