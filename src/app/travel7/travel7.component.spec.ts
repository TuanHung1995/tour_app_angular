import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel7Component } from './travel7.component';

describe('Travel7Component', () => {
  let component: Travel7Component;
  let fixture: ComponentFixture<Travel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
