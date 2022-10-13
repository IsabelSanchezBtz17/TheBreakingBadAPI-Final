import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  public character$!: Observable<Character[]>;
  public idCharacter = '';
  public search: boolean = true;
  public characterNotFound: string=  '';
  public  deviceXs!: boolean;

 
  constructor(private apiServices: ApiService) {


    this.character$ = apiServices.search('characters').pipe(
      tap(resp => {
        console.log(resp)

      })
      
    )
   
    this.deviceXs= this.apiServices.resolution();
   



  }

  mostrar(){

    this.search= !this.search;

  }

  onSearch(){
    this.characterNotFound = '';
    this.character$ =this.apiServices.search('characters?name='+ this.idCharacter).pipe(
      tap(resp => {
        console.log(resp)
        if (resp.length === 0){
          this.characterNotFound = 'Search not found, try again';
        }
      })
      
    )

  }
}



