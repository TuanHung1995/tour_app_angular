import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour4Component } from './tour4.component';

describe('Tour4Component', () => {
  let component: Tour4Component;
  let fixture: ComponentFixture<Tour4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tour4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tour4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
