import { TestBed } from '@angular/core/testing';

import { JoincomunitiesService } from './joincomunities.service';

describe('JoincomunitiesService', () => {
  let service: JoincomunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoincomunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
