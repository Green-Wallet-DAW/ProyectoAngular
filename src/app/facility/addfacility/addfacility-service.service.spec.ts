import { TestBed } from '@angular/core/testing';

import { AddfacilityServiceService } from './addfacility-service.service';

describe('AddfacilityServiceService', () => {
  let service: AddfacilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfacilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
