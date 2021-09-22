import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { flightDetails } from 'src/app/classes/flightDetails.class';
import { IStorageData } from 'src/app/interfaces/storage.model';
import { DataService } from 'src/app/service/data-service/data.service';
import { SeeFlightDetailComponent } from '../see-flight-detail/see-flight-detail.component';

@Component({
  selector: 'app-show-roster',
  templateUrl: './show-roster.component.html',
  styleUrls: ['./show-roster.component.scss'],
})
export class ShowRosterComponent implements OnInit {
  dataNotFound = false;
  rosterList: Array<flightDetails> = [];
  standByData: Array<flightDetails> = [];
  layOverData: Array<flightDetails> = [];
  assignedFlights: Array<flightDetails> = [];
  offFlights: Array<flightDetails> = [];
  positionedFlights: Array<flightDetails> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService
      .getRosterData()
      .then((data) => {
        this.dataNotFound = !(data && data instanceof Array && data.length > 0);
        let prevItem: flightDetails;
        data = flightDetails.sortBaseOnDate(data);
        this.rosterList = data.map((item) => {
          item.displayDate =
            !prevItem || (prevItem && item.date !== prevItem.date);
          prevItem = item;

          return item;
        });

        const appData = localStorage.getItem('app');
        if (appData) {
          const storedData: IStorageData = JSON.parse(appData);
          storedData.dataFetchedOn = new Date();
          storedData.dataFetched = true;
          storedData.rosterData = this.rosterList;
          localStorage.setItem('app', JSON.stringify(storedData));
        }
        this.rosterList.map((rosterData: flightDetails) => {
          switch (rosterData.dutyCode) {
            case 'FLIGHT':
              this.assignedFlights.push(rosterData);
              break;
            case 'OFF':
              this.offFlights.push(rosterData);
              break;
            case 'LAYOVER':
              this.layOverData.push(rosterData);
              break;
            case 'POSITIONING':
              this.positionedFlights.push(rosterData);
              break;
            case 'Standby':
              this.standByData.push(rosterData);
              break;

            default:
              break;
          }
        });
      })
      .catch((err) => {
        this.dataNotFound = true;
      });
  }

  /**
   * Opens dialog to display details
   */
  showDetails(flightDetails: flightDetails): void {
    const dialogRef = this.dialog.open(SeeFlightDetailComponent, {
      width: '400px',
      data: { flightDetails },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }

  logout(): void {
    localStorage.removeItem('app');
    this.router.navigate(['/']);
    this.dataService.toastr.info('You are logged out!');
  }
}
