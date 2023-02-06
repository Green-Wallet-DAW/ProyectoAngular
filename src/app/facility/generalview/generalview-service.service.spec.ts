import { TestBed } from '@angular/core/testing';

import { GeneralviewServiceService } from './generalview-service.service';

describe('GeneralviewServiceService', () => {
  let service: GeneralviewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralviewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
