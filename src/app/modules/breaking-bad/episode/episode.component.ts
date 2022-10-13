import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {

  public episode$ !: Observable<Episode[]>;
  public idEpisode: string = '';
  public episodeNotFound: string = '';
  public search: boolean = true;



  constructor(public apiServices: ApiService) {


    this.episode$ = apiServices.search('episodes').pipe(
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
    this.episodeNotFound = '';
    this.episode$ =this.apiServices.search('quote?author='+ this.idEpisode).pipe(
      tap(resp => {
        console.log(resp)
        if (resp.length === 0){
          this.episodeNotFound = 'Search not found, try again';
        }
      })
      
    )

  }



}



