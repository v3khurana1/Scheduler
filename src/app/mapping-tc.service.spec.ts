import { TestBed } from '@angular/core/testing';

import { MappingTCService } from './mapping-tc.service';

describe('MappingTCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MappingTCService = TestBed.get(MappingTCService);
    expect(service).toBeTruthy();
  });
});
