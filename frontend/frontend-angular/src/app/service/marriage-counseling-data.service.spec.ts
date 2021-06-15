import { TestBed } from '@angular/core/testing';

import { MarriageCounselingDataService } from './marriage-counseling-data.service';

describe('MarriageCounselingDataService', () => {
  let service: MarriageCounselingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarriageCounselingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
