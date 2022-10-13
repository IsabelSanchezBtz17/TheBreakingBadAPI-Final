import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, tap } from 'rxjs';
import { Death } from 'src/app/models/death.model';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent {

  public death$!: Observable<Death[]>;
  public idDeath = '';
  public search: boolean = true;
  public  deviceXs!: boolean;
  public deathNotFound: string=  '';


  constructor(private apiServices: ApiService) {


    this.death$ = apiServices.search('death').pipe(
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
    this.deathNotFound = '';
    this.death$ =this.apiServices.search('death?name='+ this.idDeath).pipe(
      tap(resp => {
        console.log(resp)
        if (resp.length === 0){
          this.deathNotFound = 'Search not found, try again';
        }
      })
      
    )

  }

}



