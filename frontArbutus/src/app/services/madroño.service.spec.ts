import { TestBed } from '@angular/core/testing';

import { MadroñoService } from './madroño.service';

describe('MadroñoService', () => {
  let service: MadroñoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadroñoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
