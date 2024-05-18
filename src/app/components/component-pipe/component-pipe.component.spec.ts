import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPipeComponent } from './component-pipe.component';

describe('ComponentPipeComponent', () => {
  let component: ComponentPipeComponent;
  let fixture: ComponentFixture<ComponentPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
