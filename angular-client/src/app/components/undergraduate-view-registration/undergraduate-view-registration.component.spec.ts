import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateViewRegistrationComponent } from './undergraduate-view-registration.component';

describe('UndergraduateViewRegistrationComponent', () => {
  let component: UndergraduateViewRegistrationComponent;
  let fixture: ComponentFixture<UndergraduateViewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateViewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
