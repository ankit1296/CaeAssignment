import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedInUser } from 'src/app/classes/loggedInUser.class';
import { IStorageData } from 'src/app/interfaces/storage.model';
import { DataService } from 'src/app/service/data-service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  dummyUser = {
    username:'richard',
    password: 'Richard123'
  }
  constructor(private dataService:DataService,private router:Router) { }
 
 

  /**
   * Checks credentials and login to app
   */
  loginToRosterApp(): void {
       if(this.loginForm.valid && this.loginForm.get('username')?.value === this.dummyUser.username && this.loginForm.get('password')?.value === this.dummyUser.password) {
         this.dataService.toastr.success('Login Successful !');
         const dataToStore:IStorageData = {user:LoggedInUser.getLoggedInUserInstance(this.dummyUser.username,this.dummyUser.password),rosterData:[],dataFetched:false,dataFetchedOn:undefined};
         localStorage.setItem('app',JSON.stringify(dataToStore));
         this.router.navigate(['roster']);
       } else {
        this.dataService.toastr.error('Login Failed !');
       }
  }

}
