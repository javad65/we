import { TestBed, inject } from '@angular/core/testing';

import { CountryComboService } from './country-combo.service';

describe('CountryComboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryComboService]
    });
  });

  it('should be created', inject([CountryComboService], (service: CountryComboService) => {
    expect(service).toBeTruthy();
  }));
});
