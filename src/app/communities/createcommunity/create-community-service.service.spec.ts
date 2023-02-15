import { TestBed } from '@angular/core/testing';

import { CreateCommunityServiceService } from './create-community-service.service';

describe('CreateCommunityServiceService', () => {
  let service: CreateCommunityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCommunityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
