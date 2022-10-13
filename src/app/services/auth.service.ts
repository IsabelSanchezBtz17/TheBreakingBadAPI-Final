import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean= false;
  public usuario: string = '';
  public password: string = '';
  public token: string= '';

  constructor() { }

  login( ){
    this.auth= true;
    localStorage.setItem('seccion', this.auth.toString());
    
  }

  logout(){
    
    this.auth= false;
    localStorage.clear();
  }
  


    getToken(username: string, password: string ){
      this.token= '';
      if (username === 'admin' && password ==='admin'){
        this.login();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.token='417b72a14eef2ebe72be5e7c60ef2b65'
         return ''
      }
      return 'Datos incorrectos'
    }

   

}
