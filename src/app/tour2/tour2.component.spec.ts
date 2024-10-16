import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour2Component } from './tour2.component';

describe('Tour2Component', () => {
  let component: Tour2Component;
  let fixture: ComponentFixture<Tour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tour2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
