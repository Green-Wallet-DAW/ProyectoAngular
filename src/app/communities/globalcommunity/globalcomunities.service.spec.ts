import { TestBed } from '@angular/core/testing';

import { GlobalcomunitiesService } from './globalcomunities.service';

describe('GlobalcomunitiesService', () => {
  let service: GlobalcomunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalcomunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
