import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestcasesComponent } from './display-testcases.component';

describe('DisplayTestcasesComponent', () => {
  let component: DisplayTestcasesComponent;
  let fixture: ComponentFixture<DisplayTestcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTestcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
