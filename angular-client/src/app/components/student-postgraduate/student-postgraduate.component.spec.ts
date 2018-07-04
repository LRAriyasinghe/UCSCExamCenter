import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPostgraduateComponent } from './student-postgraduate.component';

describe('StudentPostgraduateComponent', () => {
  let component: StudentPostgraduateComponent;
  let fixture: ComponentFixture<StudentPostgraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPostgraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPostgraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
