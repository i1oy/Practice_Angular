import { TestBed, inject } from '@angular/core/testing';

import { WeiboService } from './weibo.service';

describe('WeiboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeiboService]
    });
  });

  it('should be created', inject([WeiboService], (service: WeiboService) => {
    expect(service).toBeTruthy();
  }));
});
