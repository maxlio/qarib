import { TrackingService } from './tracking.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MatButtonModule , MatTableModule, MatToolbarModule , MatDividerModule , MatSortModule  } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamlatsComponent } from './hamlats/hamlats.component';
import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MapviewComponent } from './mapview/mapview.component';
@NgModule({
  declarations: [
    AppComponent,
    HamlatsComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    CdkTableModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    CdkTableModule,
    MatSortModule,
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
