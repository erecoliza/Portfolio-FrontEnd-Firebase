import { TestBed } from '@angular/core/testing';

import { PortfolioapiService } from './portfolioapi.service';

describe('PortfolioapiService', () => {
  let service: PortfolioapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
