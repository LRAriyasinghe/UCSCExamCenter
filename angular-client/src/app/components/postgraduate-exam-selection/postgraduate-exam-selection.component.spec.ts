import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateExamSelectionComponent } from './postgraduate-exam-selection.component';

describe('PostgraduateExamSelectionComponent', () => {
  let component: PostgraduateExamSelectionComponent;
  let fixture: ComponentFixture<PostgraduateExamSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateExamSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateExamSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
