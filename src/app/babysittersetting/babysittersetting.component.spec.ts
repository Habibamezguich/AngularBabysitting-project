import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysittersettingComponent } from './babysittersetting.component';

describe('BabysittersettingComponent', () => {
  let component: BabysittersettingComponent;
  let fixture: ComponentFixture<BabysittersettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysittersettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabysittersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
