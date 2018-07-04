import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduateRepeatComponent } from './undergraduate-repeat.component';

describe('UndergraduateRepeatComponent', () => {
  let component: UndergraduateRepeatComponent;
  let fixture: ComponentFixture<UndergraduateRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergraduateRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergraduateRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
