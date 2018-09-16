import { TestBed, inject } from '@angular/core/testing';

import { ArrServiceService } from './arr-service.service';

describe('ArrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrServiceService]
    });
  });

  it('should be created', inject([ArrServiceService], (service: ArrServiceService) => {
    expect(service).toBeTruthy();
  }));
});
