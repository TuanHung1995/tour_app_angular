import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel5Component } from './travel5.component';

describe('Travel5Component', () => {
  let component: Travel5Component;
  let fixture: ComponentFixture<Travel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
