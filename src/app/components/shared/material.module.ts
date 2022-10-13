import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule

  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ]
})
export class MaterialModule { }
