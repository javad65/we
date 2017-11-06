import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialStatusComponent } from './special-status.component';

describe('SpecialStatusComponent', () => {
  let component: SpecialStatusComponent;
  let fixture: ComponentFixture<SpecialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
