import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Set our map properties
  // 39.9042° N, 116.4074° E
  mapCenter = [116.5, 39.9];
  leafMapCenter = [39.9, 116.5];
  baseMapType = 'darkTiles';
  mapZoomLevel = 6;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
}
