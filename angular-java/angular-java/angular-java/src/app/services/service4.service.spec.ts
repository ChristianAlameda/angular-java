import { TestBed } from '@angular/core/testing';

import { Service4Service } from './service4.service';

describe('Service4Service', () => {
  let service: Service4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
