import { TestBed } from '@angular/core/testing';

import { ImpairGuard } from './impair.guard';

describe('ImpairGuard', () => {
  let guard: ImpairGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ImpairGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
