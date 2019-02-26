import { TestBed } from '@angular/core/testing';

import { ClassTableService } from './class-table.service';

describe('ClassTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassTableService = TestBed.get(ClassTableService);
    expect(service).toBeTruthy();
  });
});
