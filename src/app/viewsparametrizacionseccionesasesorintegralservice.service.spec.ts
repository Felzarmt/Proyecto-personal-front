import { TestBed } from '@angular/core/testing';

import { ViewsparametrizacionseccionesasesorintegralserviceService } from './viewsparametrizacionseccionesasesorintegralservice.service';

describe('ViewsparametrizacionseccionesasesorintegralserviceService', () => {
  let service: ViewsparametrizacionseccionesasesorintegralserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewsparametrizacionseccionesasesorintegralserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
