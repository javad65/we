import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSpecialStatusComponent } from './person-special-status.component';

describe('PersonSpecialStatusComponent', () => {
  let component: PersonSpecialStatusComponent;
  let fixture: ComponentFixture<PersonSpecialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSpecialStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSpecialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
