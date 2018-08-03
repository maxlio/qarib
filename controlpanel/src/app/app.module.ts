import { NewCampaignDialogComponent } from './new-campaign.component';
import { TrackingService } from './tracking.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MatButtonModule , MatTableModule, MatToolbarModule , MatDividerModule ,
  MatSortModule , MatMenuModule , MatIconModule , MatDialogModule ,
   MatSelectModule, MatDatepickerModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
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
    MapviewComponent,
    NewCampaignDialogComponent,
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
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule,
    CdkTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent],
  entryComponents:[NewCampaignDialogComponent]
})
export class AppModule { }
