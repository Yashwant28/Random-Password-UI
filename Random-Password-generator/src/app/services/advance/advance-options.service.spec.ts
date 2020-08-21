import { TestBed } from '@angular/core/testing';

import { AdvanceOptionsService } from './advance-options.service';

describe('AdvanceOptionsService', () => {
  let service: AdvanceOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvanceOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
