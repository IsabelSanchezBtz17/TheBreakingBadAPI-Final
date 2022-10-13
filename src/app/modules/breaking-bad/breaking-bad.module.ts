import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakingBadRoutingModule } from './breaking-bad-routing.module';
import { MaterialModule } from '../../components/shared/material.module';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FocusDirective } from 'src/app/libs/directives/focus.directive';
import { EpisodeComponent } from './episode/episode.component';
import { DeathComponent } from './death/death.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
    FocusDirective,
    EpisodeComponent,
    DeathComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    BreakingBadRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class BreakingBadModule { }
