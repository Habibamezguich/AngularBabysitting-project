import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetParentComponent } from './password-reset-parent.component';

describe('PasswordResetParentComponent', () => {
  let component: PasswordResetParentComponent;
  let fixture: ComponentFixture<PasswordResetParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordResetParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordResetParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
