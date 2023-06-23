import { TestBed } from '@angular/core/testing';

import { MaincodeService } from './maincode.service';

describe('MaincodeService', () => {
  let service: MaincodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaincodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
