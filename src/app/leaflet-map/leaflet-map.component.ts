import { Component, OnInit, Inject, Input } from '@angular/core';

import { Weibo } from '../shared/weibo';
import { WeiboService } from '../services/weibo.service';

import { MapServices } from '../shared/mapServiceType';

import { CustomCircleMarker } from '../shared/customCircleMarker';

declare var L: any;

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  selectedWeibo: Weibo;
  weibos: Weibo[];

  constructor(
    private weiboService: WeiboService,
    @Inject('BaseURL') protected BaseURL
  ) { }

  // DEFAULT CENTER: 34.3416° N, 108.9398° E
  private _center: Array<number> = [34.3416, 108.9398];
  // ZOOM LEVEL
  private _zoom = 9;
  // Map Service Type
  private _mapService = MapServices.normalTiles;

  private map: any;

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom() {
    return this._zoom;
  }

  @Input()
  set mapService(mapType: string) {
    if (MapServices[mapType]) {
      this._mapService = MapServices[mapType];
    }
  }

  get mapService() {
    return this._mapService;
  }

  ngOnInit() {
    this.initializeMap();
    console.log('Leaflet Map');

    this.showWeiboMarker();
  }

  initializeMap() {
    this.map = L.map('map').setView(this._center, this._zoom);
    // const normalTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const darkTiles = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';
    L.tileLayer(this._mapService, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.control.scale().addTo(this.map);
  }

  showWeiboMarker() {
    const markerOpts = {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: .8,
      // stroke: false,
      weight: 3,
      opacity: 0,
      radius: 5,
      id: ''
    };
    const params = {
      page: 1,
      size: 1000
    };
    this.weiboService.getAllWBDocuments(params)
      .subscribe(weibos => {
        this.weibos = weibos;
        // this.selectedWeibo = weibos[0];
        // console.log('Weibo: ', this.weibos[0]);
        const pointsGroup = L.featureGroup().addTo(this.map);
        for (const wb of weibos) {
          const lat = wb.location.coordinates[1];
          const lon = wb.location.coordinates[0];
          markerOpts.id = wb.id;
          const point = new CustomCircleMarker([lat, lon], markerOpts);
          point.addTo(pointsGroup);
        }

        pointsGroup.on('click', (evt) => {
          const id = evt.propagatedFrom.options.id;
          // console.log(id);
          this.weiboService.getWBDocumentByID(id)
            .subscribe(weibo => {
              // console.log(weibo[0]);
              this.selectedWeibo = weibo[0];
            });
        });
      });
  }

}
