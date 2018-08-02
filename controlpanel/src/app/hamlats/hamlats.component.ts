import { TrackingService } from './../tracking.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-hamlats',
  templateUrl: './hamlats.component.html',
  styleUrls: ['./hamlats.component.css']
})
export class HamlatsComponent implements OnInit {
  title = 'nearmotion';
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  items: Observable<any[]>;
  presence: Observable<any[]>;
  locations: any[];
  tracking: TrackingService;
  constructor(db: AngularFirestore , tracking: TrackingService ) {
    this.items = db.collection('hamlats').valueChanges();
    this.tracking = tracking;
}
displayedColumns: string[] = ['name', 'status'];
ngOnInit() {
  this.locations = this.tracking.points;
  this.dataSource = this.items;
}
}
