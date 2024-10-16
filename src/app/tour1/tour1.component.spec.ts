import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour1Component } from './tour1.component';

describe('Tour1Component', () => {
  let component: Tour1Component;
  let fixture: ComponentFixture<Tour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tour1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
