import { TestBed } from '@angular/core/testing';

import { YourcomunitiesService } from './yourcomunities.service';

describe('YourcomunitiesService', () => {
  let service: YourcomunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourcomunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
