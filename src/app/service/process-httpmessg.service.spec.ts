import { TestBed, inject } from '@angular/core/testing';

import { ProcessHTTPMessgService } from './process-httpmessg.service';

describe('ProcessHTTPMessgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHTTPMessgService]
    });
  });

  it('should be created', inject([ProcessHTTPMessgService], (service: ProcessHTTPMessgService) => {
    expect(service).toBeTruthy();
  }));
});
