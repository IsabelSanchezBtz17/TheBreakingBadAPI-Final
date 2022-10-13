import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../libs/constants.class';
import StorageHelper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  constructor(private http: HttpClient) { }

 

  checkStatus(): boolean {
    console.log("Valor real", StorageHelper.getItem(Constants.auth))
    if (StorageHelper.getItem(Constants.auth) == 'true') {
      console.log('ESta en una seccion ')
      return true
    }
    return false

  }



  login(username: string, password: string): Observable<any> {
    return this.http.post(Constants.url + 'api/login', {
      username,
      password
    });


  }

  logout() {
    StorageHelper.setItem(Constants.auth, false)
  }

  loginT(username: string, password: string){
    if(username==='Isobel03'&& password==="172316"){
      StorageHelper.setItem(Constants.auth, true)
    }
  }



}
