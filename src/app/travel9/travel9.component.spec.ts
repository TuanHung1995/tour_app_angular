import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel9Component } from './travel9.component';

describe('Travel9Component', () => {
  let component: Travel9Component;
  let fixture: ComponentFixture<Travel9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
