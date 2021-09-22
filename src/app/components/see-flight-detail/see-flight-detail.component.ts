import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { flightDetails } from 'src/app/classes/flightDetails.class';

@Component({
  selector: 'app-see-flight-detail',
  templateUrl: './see-flight-detail.component.html',
  styleUrls: ['./see-flight-detail.component.scss'],
})
export class SeeFlightDetailComponent implements OnInit {
  flightDetails: flightDetails | undefined;
  constructor(
    public dialogRef: MatDialogRef<SeeFlightDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.flightDetails = data.flightDetails;
  }

  ngOnInit(): void {}
}
