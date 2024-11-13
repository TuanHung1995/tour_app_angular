import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel3Component } from './travel3.component';

describe('Travel3Component', () => {
  let component: Travel3Component;
  let fixture: ComponentFixture<Travel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
