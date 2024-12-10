import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home/view-home.component';
import { EpisodesModule } from '../../episodes/episodes.module';



@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    EpisodesModule
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class HomeModule { }
