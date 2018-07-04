import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUndergraduateComponent } from './student-undergraduate.component';

describe('StudentUndergraduateComponent', () => {
  let component: StudentUndergraduateComponent;
  let fixture: ComponentFixture<StudentUndergraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUndergraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUndergraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
