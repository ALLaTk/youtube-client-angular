import { TestBed } from '@angular/core/testing';

import { DateValidatorService } from './date-validator.service';

describe('CreateCardService', () => {
  let service: DateValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
