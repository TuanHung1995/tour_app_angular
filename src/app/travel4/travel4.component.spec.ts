import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel4Component } from './travel4.component';

describe('Travel4Component', () => {
  let component: Travel4Component;
  let fixture: ComponentFixture<Travel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
