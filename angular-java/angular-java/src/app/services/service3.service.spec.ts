import { TestBed } from '@angular/core/testing';

import { Service3Service } from './service3.service';

describe('Service3Service', () => {
  let service: Service3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
