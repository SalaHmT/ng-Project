import { TestBed } from '@angular/core/testing';

import { ServiceEmpService } from './service-emp.service';

describe('ServiceEmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEmpService = TestBed.get(ServiceEmpService);
    expect(service).toBeTruthy();
  });
});
