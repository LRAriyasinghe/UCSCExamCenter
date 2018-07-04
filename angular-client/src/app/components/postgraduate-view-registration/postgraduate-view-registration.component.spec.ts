import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateViewRegistrationComponent } from './postgraduate-view-registration.component';

describe('PostgraduateViewRegistrationComponent', () => {
  let component: PostgraduateViewRegistrationComponent;
  let fixture: ComponentFixture<PostgraduateViewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateViewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateViewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
