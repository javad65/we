import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialStatusDetailComponent } from './special-status-detail.component';

describe('SpecialStatusDetailComponent', () => {
  let component: SpecialStatusDetailComponent;
  let fixture: ComponentFixture<SpecialStatusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialStatusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
