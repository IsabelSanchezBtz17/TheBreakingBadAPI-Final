import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Quote } from 'src/app/models/quotes.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public quote$!: Observable<Quote[]>;
  public flag: boolean = true;



  constructor(public apiServices: ApiService, public authService: AuthService) {


    this.quote$ = apiServices.search('quote/random').pipe(
      tap(resp => {
        console.log(resp)
      })   
    )

  }

  logout(){
    console.log('cerrar')
    this.flag= false
    this.authService.logout()
//routerLink="/login" 
  }

  ocultar(){

    this.flag= false

  }

  
}



