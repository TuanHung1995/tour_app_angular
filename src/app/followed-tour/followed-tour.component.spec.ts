import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedTourComponent } from '../footer/followed-tour.component';

describe('FollowedTourComponent', () => {
  let component: FollowedTourComponent;
  let fixture: ComponentFixture<FollowedTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowedTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
