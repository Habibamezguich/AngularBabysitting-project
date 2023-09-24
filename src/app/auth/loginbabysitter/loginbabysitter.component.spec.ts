import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbabysitterComponent } from './loginbabysitter.component';

describe('LoginbabysitterComponent', () => {
  let component: LoginbabysitterComponent;
  let fixture: ComponentFixture<LoginbabysitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbabysitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbabysitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
