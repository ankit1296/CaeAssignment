import { Component, Input, OnInit } from '@angular/core';
import { flightDetails } from 'src/app/classes/flightDetails.class';

@Component({
  selector: 'app-roster-view',
  templateUrl: './roster-view.component.html',
  styleUrls: ['./roster-view.component.scss']
})
export class RosterViewComponent implements OnInit {


  @Input() flightDetails:flightDetails | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
