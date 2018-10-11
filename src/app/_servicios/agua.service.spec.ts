import { TestBed } from '@angular/core/testing';

import { AguaService } from './agua.service';

describe('AguaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AguaService = TestBed.get(AguaService);
    expect(service).toBeTruthy();
  });
});
