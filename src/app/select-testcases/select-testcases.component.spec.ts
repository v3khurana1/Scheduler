import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTestcasesComponent } from './select-testcases.component';

describe('SelectTestcasesComponent', () => {
  let component: SelectTestcasesComponent;
  let fixture: ComponentFixture<SelectTestcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTestcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTestcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
