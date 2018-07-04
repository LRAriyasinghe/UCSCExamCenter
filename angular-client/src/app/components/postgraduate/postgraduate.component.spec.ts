import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateComponent } from './postgraduate.component';

describe('PostgraduateComponent', () => {
  let component: PostgraduateComponent;
  let fixture: ComponentFixture<PostgraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
