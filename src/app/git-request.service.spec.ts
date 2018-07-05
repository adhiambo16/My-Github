import { TestBed, inject } from '@angular/core/testing';

import { GitRequestService } from './git-request.service';

describe('GitRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitRequestService]
    });
  });

  it('should be created', inject([GitRequestService], (service: GitRequestService) => {
    expect(service).toBeTruthy();
  }));
});
