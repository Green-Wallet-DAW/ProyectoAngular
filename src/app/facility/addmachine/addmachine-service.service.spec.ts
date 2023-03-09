import { TestBed } from '@angular/core/testing';

import { AddmachineServiceService } from './addmachine-service.service';

describe('AddmachineServiceService', () => {
  let service: AddmachineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmachineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
