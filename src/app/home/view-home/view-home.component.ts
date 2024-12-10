import { Component, OnInit } from '@angular/core';
import { FavouriteEpisodesService } from '../../personajes/service/favourite-episodes.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent implements OnInit {
  open_all_episodes: boolean = true;
  open_favourite_episodes: boolean = false;
  id_favourite_episodes: number[] = [];

  constructor(private favouriteEpisodesServices: FavouriteEpisodesService){}

  ngOnInit(): void {
      this.get_favourite_episodes();
  }

  get_favourite_episodes(){
    this.id_favourite_episodes = this.favouriteEpisodesServices.get();
  }

  open_ae(){
    this.open_all_episodes = true;
    this.open_favourite_episodes = false;
  }

  open_fe(){
    this.open_favourite_episodes = true;
    this.open_all_episodes = false;
  }
}
