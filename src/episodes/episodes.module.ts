import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';



@NgModule({
  declarations: [
    EpisodesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
