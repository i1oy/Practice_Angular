import { Component, OnInit, Input } from '@angular/core';

import { Weibo } from '../shared/weibo';

@Component({
  selector: 'app-weibo-details',
  templateUrl: './weibo-details.component.html',
  styleUrls: ['./weibo-details.component.css']
})
export class WeiboDetailsComponent implements OnInit {
  private _weibo: Weibo;

  @Input()
  set weibo(weibo: Weibo) {
    // console.log(w);
    this._weibo = weibo;
  }

  get weibo() {
    return this._weibo;
  }

  constructor() { }

  ngOnInit() {
  }

}
