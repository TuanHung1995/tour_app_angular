import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour3Component } from './tour3.component';

describe('Tour3Component', () => {
  let component: Tour3Component;
  let fixture: ComponentFixture<Tour3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tour3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tour3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
