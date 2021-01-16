import { TestBed } from '@angular/core/testing';

import { CheckCredentialsService } from './check-credentials.service';

describe('CheckCredentialsService', () => {
  let service: CheckCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
