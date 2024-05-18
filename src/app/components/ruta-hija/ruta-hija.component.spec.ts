import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHijaComponent } from './ruta-hija.component';

describe('RutaHijaComponent', () => {
  let component: RutaHijaComponent;
  let fixture: ComponentFixture<RutaHijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutaHijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
