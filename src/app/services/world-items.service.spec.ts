import { TestBed } from '@angular/core/testing';

import { WorldItemsService } from './world-items.service';

describe('WorldItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldItemsService = TestBed.get(WorldItemsService);
    expect(service).toBeTruthy();
  });
});
