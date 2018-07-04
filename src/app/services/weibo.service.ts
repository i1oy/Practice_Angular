import { Injectable } from '@angular/core';

import { Weibo } from '../shared/weibo';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';  // Different from rxjs@^5.5.6

import { ProcessHttpMsgService } from './process-http-msg.service';

@Injectable({
  providedIn: 'root'
})
export class WeiboService {

  constructor(
    private processHTTPMsgService: ProcessHttpMsgService,
    private restangular: Restangular
  ) { }

  getAllWBDocuments(params: object): Observable<Weibo[]> {
    return this.restangular.all('weibos').getList(params);
  }

  getWBDocumentByID(id: string): Observable<Weibo> {
    return this.restangular.one('weibos', id).get();
  }

}
