import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel6Component } from './travel6.component';

describe('Travel6Component', () => {
  let component: Travel6Component;
  let fixture: ComponentFixture<Travel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
