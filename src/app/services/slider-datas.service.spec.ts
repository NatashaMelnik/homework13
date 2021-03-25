import { TestBed } from '@angular/core/testing';

import { SliderDatasService } from './slider-datas.service';

describe('SliderDatasService', () => {
  let service: SliderDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
