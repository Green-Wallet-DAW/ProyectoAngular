import { TestBed } from '@angular/core/testing';

import { MydevicesService } from './mydevices.service';

describe('MydevicesService', () => {
  let service: MydevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
