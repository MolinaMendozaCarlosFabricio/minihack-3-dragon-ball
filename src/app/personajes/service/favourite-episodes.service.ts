import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteEpisodesService {
  id_favourite_episodes: number[] = [];

  constructor() { }

  get(): number[]{
    const list_episodes = localStorage.getItem('list_favourite_episodes');
    if(list_episodes)
      this.id_favourite_episodes = JSON.parse(list_episodes);

    return this.id_favourite_episodes;
  }

  put(id_episode: number){
    this.get();
    this.id_favourite_episodes.push(id_episode);
    localStorage.setItem("list_favourite_episodes", JSON.stringify(this.id_favourite_episodes))
  }
}
