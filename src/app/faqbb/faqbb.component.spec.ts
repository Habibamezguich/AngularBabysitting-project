import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQBBComponent } from './faqbb.component';

describe('FAQBBComponent', () => {
  let component: FAQBBComponent;
  let fixture: ComponentFixture<FAQBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQBBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
