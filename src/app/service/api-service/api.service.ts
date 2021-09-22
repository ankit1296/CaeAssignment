
import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  /***
   *  get data using httpClient's get method
  @param url url for which data needs to be retreived
   */
  get(url:string):Observable<any> {
    return this.http.get(url)
  }
}
