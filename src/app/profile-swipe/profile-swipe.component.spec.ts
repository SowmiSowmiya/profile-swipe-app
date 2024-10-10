import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSwipeComponent } from './profile-swipe.component';

describe('ProfileSwipeComponent', () => {
  let component: ProfileSwipeComponent;
  let fixture: ComponentFixture<ProfileSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
