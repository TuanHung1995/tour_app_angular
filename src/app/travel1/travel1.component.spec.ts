import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel1Component } from './travel1.component';

describe('Travel1Component', () => {
  let component: Travel1Component;
  let fixture: ComponentFixture<Travel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
