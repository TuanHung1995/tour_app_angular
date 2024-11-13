import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Travel10Component } from './travel10.component';

describe('Travel10Component', () => {
  let component: Travel10Component;
  let fixture: ComponentFixture<Travel10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Travel10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Travel10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
