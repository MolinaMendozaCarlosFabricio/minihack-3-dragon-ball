import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { RowEpisodeComponent } from './row-episode/row-episode.component';


@NgModule({
  declarations: [
    EpisodesListComponent,
    RowEpisodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
