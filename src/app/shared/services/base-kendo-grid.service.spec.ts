import { TestBed, inject } from '@angular/core/testing';

import { BaseKendoGridService } from './base-kendo-grid.service';

describe('BaseKendoGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseKendoGridService]
    });
  });

  it('should be created', inject([BaseKendoGridService], (service: BaseKendoGridService) => {
    expect(service).toBeTruthy();
  }));
});
