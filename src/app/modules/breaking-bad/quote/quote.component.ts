import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Quote } from 'src/app/models/quotes.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  public quote$!: Observable<Quote[]>;
  public idQuote: string = '';
  public QuotehNotFound: string = '';
  public search: boolean = true;



  constructor(public apiServices: ApiService) {


    this.quote$ = apiServices.search('quotes').pipe(
      tap(resp => {
        console.log(resp)
      })   
    )

  }



  addQuote(data: number){
    if(this.apiServices.checkQuote(data)){
      this.apiServices.removeQuote(data.toString())
    } else {
      this.apiServices.addQuote(data.toString())
    }
  }

  mostrar(){

    this.search= !this.search;

  }

  onSearch(){
    this.QuotehNotFound = '';
    this.quote$ =this.apiServices.search('quote?author='+ this.idQuote).pipe(
      tap(resp => {
        console.log(resp)
        if (resp.length === 0){
          this.QuotehNotFound = 'Search not found, try again';
        }
      })
      
    )

  }



}



