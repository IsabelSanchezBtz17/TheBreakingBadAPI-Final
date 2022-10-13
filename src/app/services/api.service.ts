import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constants } from '../libs/constants.class';
import StorageHelper from '../libs/helpers/storage.helper';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public deviceXs!: boolean;
  public auth: boolean= false;

  constructor(private http: HttpClient) { }





  refreshToken() {
    return this.http.post(Constants.url + 'api/refresh', {
      session: StorageHelper.getItem('session')
    })
  }


  addQuote(id: string) {
    let myList = JSON.parse(localStorage.getItem(Constants.my_list) ?? '[]');
    if (myList.indexOf(id) == -1) {
      myList.push(id)
      StorageHelper.setItem(Constants.my_list, myList)
    }

  }

  removeQuote(id: string) {
    let myList = JSON.parse(localStorage.getItem(Constants.my_list) ?? '[]');
    let index = myList.indexOf(id)

    if (index > -1) {
      myList.splice(index, 1)
      StorageHelper.setItem(Constants.my_list, myList)
    }

  }


  checkQuote(id: number): boolean {
    let myList = JSON.parse(localStorage.getItem(Constants.my_list) ?? '[]');
    return (myList.indexOf(id.toString()) > -1)

  }


  search(endpoints: string): Observable<any> {
    console.log(endpoints)
    return this.http.post(Constants.url + 'mirror/breakingbad',
      {
        endpoint: endpoints

      }
    )
  }


  searchR(endpoints: string): Observable<any>{
    return this.http.get('https://www.breakingbadapi.com/api/'+ endpoints )

  }


  resolution(): boolean {
    return this.deviceXs
  }

}
