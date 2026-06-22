import { TestBed } from '@angular/core/testing';

import { Carteras } from './carteras.service';

describe('Carteras', () => {
  let service: Carteras;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carteras);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
