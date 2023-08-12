import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateEmployeeComponent } from './late-employee.component';

describe('LateEmployeeComponent', () => {
  let component: LateEmployeeComponent;
  let fixture: ComponentFixture<LateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LateEmployeeComponent]
    });
    fixture = TestBed.createComponent(LateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
