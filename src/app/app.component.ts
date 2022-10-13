import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
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

  constructor(public mediaObserver: MediaObserver, public apiService: ApiService) {

  }
  
  ngOnInit()   {
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