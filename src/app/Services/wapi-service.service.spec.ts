import { TestBed } from '@angular/core/testing';

import { WapiServiceService } from './wapi-service.service';

describe('WapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WapiServiceService = TestBed.get(WapiServiceService);
    expect(service).toBeTruthy();
  });
});
