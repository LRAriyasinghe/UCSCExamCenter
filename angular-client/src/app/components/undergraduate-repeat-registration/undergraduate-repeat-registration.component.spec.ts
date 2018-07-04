import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateRepeatRegistrationComponent } from './undergraduate-repeat-registration.component';

describe('UndergraduateRepeatRegistrationComponent', () => {
  let component: UndergraduateRepeatRegistrationComponent;
  let fixture: ComponentFixture<UndergraduateRepeatRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateRepeatRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateRepeatRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
