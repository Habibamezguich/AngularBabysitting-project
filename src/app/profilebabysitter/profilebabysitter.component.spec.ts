import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebabysitterComponent } from './profilebabysitter.component';

describe('ProfilebabysitterComponent', () => {
  let component: ProfilebabysitterComponent;
  let fixture: ComponentFixture<ProfilebabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilebabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilebabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
