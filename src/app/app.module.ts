import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

import { RestangularModule } from 'ngx-restangular';

import { RestangularConfigFactory } from './shared/restConfig';

import { baseURL } from './shared/baseurl';
import { WeiboDetailsComponent } from './weibo-details/weibo-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EsriMapComponent,
    LeafletMapComponent,
    WeiboDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
