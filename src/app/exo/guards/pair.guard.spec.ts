import { TestBed } from '@angular/core/testing';

import { PairGuard } from './pair.guard';

describe('PairGuard', () => {
  let guard: PairGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PairGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
