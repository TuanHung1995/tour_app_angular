import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel2Component } from './travel2.component';

describe('Travel2Component', () => {
  let component: Travel2Component;
  let fixture: ComponentFixture<Travel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
