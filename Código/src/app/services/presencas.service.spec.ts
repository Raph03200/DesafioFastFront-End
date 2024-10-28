import { TestBed } from '@angular/core/testing';

import { PresencasService } from './presencas.service';

describe('PresencasService', () => {
  let service: PresencasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
