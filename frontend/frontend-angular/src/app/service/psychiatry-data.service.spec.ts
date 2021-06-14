import { TestBed } from '@angular/core/testing';

import { PsychiatryDataService } from './psychiatry-data.service';

describe('PsychiatryDataService', () => {
  let service: PsychiatryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsychiatryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
