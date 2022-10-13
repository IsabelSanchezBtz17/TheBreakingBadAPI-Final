import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from './libs/constants.class';
import StorageHelper from './libs/helpers/storage.helper';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TheBreakingBadAPI';

  public mediaSub!: Subscription;
  public deviceXs!: boolean;

  constructor(public mediaObserver: MediaObserver, public apiService: ApiService, private router: Router,) {

  }
  
  ngOnInit()   {
    console.log('Inicio1', StorageHelper.getItem(Constants.auth))
  
    if (Boolean(StorageHelper.getItem(Constants.auth))==true){
      console.log('Inicio2', StorageHelper.getItem(Constants.auth))
      this.router.navigate(['home'])}

      this.mediaSub = this.mediaObserver
        .asObservable()
        .subscribe((change) => {
          change.forEach((item) => {
            this.deviceXs = item.mqAlias === "xs" ? true : false;
               console.log('activeMediaQuery', this.deviceXs);
          });
        });

        this.apiService.deviceXs = this.deviceXs;
    }



  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}