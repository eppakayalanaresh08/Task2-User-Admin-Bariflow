import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentEmployeesComponent } from './present-employees.component';

describe('PresentEmployeesComponent', () => {
  let component: PresentEmployeesComponent;
  let fixture: ComponentFixture<PresentEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentEmployeesComponent]
    });
    fixture = TestBed.createComponent(PresentEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
