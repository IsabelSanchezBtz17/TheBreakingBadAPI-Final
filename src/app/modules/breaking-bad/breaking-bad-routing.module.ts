import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/libs/guards/auth.guard';
import { CharacterComponent } from './character/character.component';
import { DeathComponent } from './death/death.component';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent, 
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: 'character',
        component: CharacterComponent
      },
      {
        path: 'quote',
        component: QuoteComponent
      },
      {
        path: 'episode',
        component: EpisodeComponent
      },
      {
        path: 'death',
        component: DeathComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakingBadRoutingModule { }
