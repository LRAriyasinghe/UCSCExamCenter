import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateExamRegistrationComponent } from './undergraduate-exam-registration.component';

describe('UndergraduateExamRegistrationComponent', () => {
  let component: UndergraduateExamRegistrationComponent;
  let fixture: ComponentFixture<UndergraduateExamRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateExamRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateExamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
