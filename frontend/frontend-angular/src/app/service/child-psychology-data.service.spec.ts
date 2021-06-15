import { TestBed } from '@angular/core/testing';

import { ChildPsychologyDataService } from './child-psychology-data.service';

describe('ChildPsychologyDataService', () => {
  let service: ChildPsychologyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildPsychologyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
