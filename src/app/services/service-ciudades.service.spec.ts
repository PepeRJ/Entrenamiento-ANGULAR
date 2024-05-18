import { TestBed } from '@angular/core/testing';

import { ServiceCiudadesService } from './service-ciudades.service';

describe('ServiceCiudadesService', () => {
  let service: ServiceCiudadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCiudadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
