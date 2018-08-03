import { TrackingService } from './../tracking.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
export interface Marker {
  latitude: number;
  logitude: number;
}
@Component({
  selector: 'app-hamlats',
  templateUrl: './hamlats.component.html',
  styleUrls: ['./hamlats.component.css']
})
export class HamlatsComponent implements OnInit {
  title = 'nearmotion';
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  db: AngularFirestore;
  items: Observable<any[]>;
  presence: Observable<any[]>;
  locations: any[];
  points: Observable<Marker[]>;
  tracking: TrackingService;
  constructor(db: AngularFirestore, tracking: TrackingService) {
    this.db = db;
    this.items = db.collection('hamlats').valueChanges();
    this.tracking = tracking;
  }
  displayedColumns: string[] = ['name', 'status'];
  ngOnInit() {
    this.presence = this.tracking.locations.pipe(map((locations) => {
      Array.prototype.forEach.call(locations, location => {
        this.getHamla(location.data.hamla_id);
      });
      return locations;
    }).bind(this));
    this.presence.subscribe(data => this.locations = data);
    this.dataSource = this.items;
  }
  getHamla(docId) {
    return this.db.doc(docId).valueChanges().forEach((data) => data);
  }
}
