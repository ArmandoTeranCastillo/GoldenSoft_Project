import { TestBed } from '@angular/core/testing';

import { UserVigilanteGuard } from './user-vigilante.guard';

describe('UserVigilanteGuard', () => {
  let guard: UserVigilanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserVigilanteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
