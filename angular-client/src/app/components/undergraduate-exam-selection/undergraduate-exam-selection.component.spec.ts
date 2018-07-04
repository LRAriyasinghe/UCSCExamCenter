import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateExamSelectionComponent } from './undergraduate-exam-selection.component';

describe('UndergraduateExamSelectionComponent', () => {
  let component: UndergraduateExamSelectionComponent;
  let fixture: ComponentFixture<UndergraduateExamSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateExamSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateExamSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
