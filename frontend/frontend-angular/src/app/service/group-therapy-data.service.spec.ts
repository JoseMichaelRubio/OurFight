import { TestBed } from '@angular/core/testing';

import { GroupTherapyDataService } from './group-therapy-data.service';

describe('GroupTherapyDataService', () => {
  let service: GroupTherapyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupTherapyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
