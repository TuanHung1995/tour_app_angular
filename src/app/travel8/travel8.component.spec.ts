import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel8Component } from './travel8.component';

describe('Travel8Component', () => {
  let component: Travel8Component;
  let fixture: ComponentFixture<Travel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
