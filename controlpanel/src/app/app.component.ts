import { NewCampaignDialogComponent } from './new-campaign.component';
import { MatDialog , MatDialogConfig } from '@angular/material';
import { Component, ViewChild, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  title = 'QARIB Dashboard';
  routes = [];
  markers = [];
  renderer: google.maps.DirectionsRenderer;
  directionService: google.maps.DirectionsService;
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewCampaignDialogComponent, dialogConfig);
  }
  ngOnInit() {
    const icons = {
      start: {
        url: 'http://maps.google.com/mapfiles/ms/micons/green.png',
        size: new google.maps.Size(44, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(22, 32),
      },
      end: {
        url: 'http://maps.google.com/mapfiles/ms/micons/yellow.png',
        size: new google.maps.Size(44, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(22, 32)
      }
    };
    this.renderer = new google.maps.DirectionsRenderer();
    this.directionService = new google.maps.DirectionsService();
    const requests = [
      {
        origin: '21.355085,39.984116',
        destination: '21.413369,39.893799',
        travelMode: 'WALKING',
      },
      {
        origin: '21.413369,39.893799',
        destination: '21.422737,39.826212',
        travelMode: 'WALKING',
      }
    ];
    const colors = [
      "#076799",
      "#0098da",
      "green"
    ];
    const docs = [
      "Yvnf7GELccVjnJLPFhz2",
      "gHs3qL0S8fXDnKy4bh7M"
    ];
    const mapProp = {
      center: new google.maps.LatLng(21.355085, 39.984116),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.renderer.setMap(this.map);
    getRoutes(this.directionService, this.map, colors, icons, requests);
  }
}
  async function getRoutes(directionService, map, colors, icons, requests) {
  let routes = [];
  await requests.forEach((request, key) => {
    directionService.route(request, (res, status) => {
      if (status.toString() === 'OK') {
        let leg = res.routes[0].legs[0];
        let startMarker = makeMarker(leg.start_location, icons.start, 'title', map);
        let markerWindow = makeWindow('<h3> Distance:' + res.routes[0].legs[0].distance.text + '</h3><h3> Duration:' + res.routes[0].legs[0].duration.text + '</h3>');
        let endMarker = makeMarker(leg.end_location, icons.end, 'title', map);
        startMarker.addListener('click', function () {
          markerWindow.open(map, startMarker);
        });
        endMarker.addListener('click', function () {
          markerWindow.open(map, endMarker);
        });
        let displayer = new google.maps.DirectionsRenderer({
          polylineOptions: {
            strokeColor: colors[key]
          }, suppressMarkers: true
        });
        displayer.setDirections(res);
        displayer.setMap(map);
      }
    });
  });
  return routes;
}
function makeMarker(position, icon, title, map) {
  return new google.maps.Marker({
    position: position,
    map: map,
    icon: icon,
    title: title
  });
}
function makeWindow(content) {
  return new google.maps.InfoWindow({
    content: content
  });
}
