import { TestBed } from '@angular/core/testing';

import { XmlCreationService } from './xml-creation.service';

describe('XmlCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XmlCreationService = TestBed.get(XmlCreationService);
    expect(service).toBeTruthy();
  });
});
