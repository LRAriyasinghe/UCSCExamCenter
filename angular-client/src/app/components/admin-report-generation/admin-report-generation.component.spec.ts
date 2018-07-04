import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportGenerationComponent } from './admin-report-generation.component';

describe('AdminReportGenerationComponent', () => {
  let component: AdminReportGenerationComponent;
  let fixture: ComponentFixture<AdminReportGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
