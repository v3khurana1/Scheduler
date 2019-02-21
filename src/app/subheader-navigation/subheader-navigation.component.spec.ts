import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderNavigationComponent } from './subheader-navigation.component';

describe('SubheaderNavigationComponent', () => {
  let component: SubheaderNavigationComponent;
  let fixture: ComponentFixture<SubheaderNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubheaderNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
