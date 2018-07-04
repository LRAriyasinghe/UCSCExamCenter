import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSelectionUndergraduateComponent } from './admin-selection-undergraduate.component';

describe('AdminSelectionUndergraduateComponent', () => {
  let component: AdminSelectionUndergraduateComponent;
  let fixture: ComponentFixture<AdminSelectionUndergraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSelectionUndergraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSelectionUndergraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
