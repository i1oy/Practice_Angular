import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiboDetailsComponent } from './weibo-details.component';

describe('WeiboDetailsComponent', () => {
  let component: WeiboDetailsComponent;
  let fixture: ComponentFixture<WeiboDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeiboDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeiboDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
