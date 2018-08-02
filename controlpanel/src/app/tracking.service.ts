import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { PromiseState } from 'q';
export interface Location { lat: number ; lng: number; }
export interface PresenceData { id: string;  data: Presence; }
export interface Presence { current_location: Location; Hamla_id: string; last_activity: string; schedule: string; stage: number; }
@Injectable()
export class TrackingService {
  db: AngularFirestore;
  locations: Observable<any>;
  points: PresenceData[];
  presenceInfo: Observable<PresenceData[]>;
  constructor(db: AngularFirestore) {
    this.db = db;
    this.presenceInfo = this.getCurrentLocotions();
    this.presenceInfo.subscribe((locations) => {
      this.points = locations;
    });
  }
  getCurrentLocotions() {
    return this.locations = this.db.collection<Presence>('presence').snapshotChanges().pipe(map((actions) => {
      return actions.map(x => {
        const data = x.payload.doc.data() as Presence;
        const id = x.payload.doc.id;

        return {id, data };
      });
    }));
}

}
