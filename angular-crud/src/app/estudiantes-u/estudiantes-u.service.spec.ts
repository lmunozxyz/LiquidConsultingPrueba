import { TestBed } from '@angular/core/testing';

import { EstudiantesUService } from './estudiantes-u.service';

describe('EstudiantesUService', () => {
  let service: EstudiantesUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
