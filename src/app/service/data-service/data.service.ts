import { Injectable, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { flightDetails } from 'src/app/classes/flightDetails.class';
import { ROSTER_DATA_URL } from 'src/app/constants/app.constants';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy{
  rosterDataUrl = ROSTER_DATA_URL;
  roasterData:Array<flightDetails> = [];
  constructor(private api:ApiService,public toastr:ToastrService) {
    this.listenForNetworkEvent();
   }

  getRosterData(): Promise<Array<flightDetails>> {
   const dataPromise = new Promise<Array<flightDetails>>((resolve,reject)=> {
     this.api.get(this.rosterDataUrl).subscribe((data)=> {
       console.log('Roaster data response: ',data)
       if(data instanceof Array) {
        this.roasterData = data.map(item=>flightDetails.createFlightDetailsFromData(item))
         console.log('data for rosterApp is: ',this.roasterData);
         resolve(this.roasterData)
      } else{
            reject();
            this.toastr.error('Data not found');
      }
   });
  });

  return dataPromise;
  }

  ngOnDestroy(): void {
    window.removeEventListener('offline',this.displayAlertForOfflineEvent.bind(this));
    window.removeEventListener('online',this.displayAlertForOnlineEvent.bind(this));
  }

  listenForNetworkEvent(): void {
    window.addEventListener('offline', this.displayAlertForOfflineEvent.bind(this),false);
    window.addEventListener('online',this.displayAlertForOnlineEvent.bind(this) ,false);
  }

  displayAlertForOnlineEvent(): void {
    this.toastr.success('Connected to internet');
  }
  displayAlertForOfflineEvent(): void {
    this.toastr.error('You are offline');
  }
}
