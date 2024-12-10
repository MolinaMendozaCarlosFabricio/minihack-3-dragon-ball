import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {
  open_all_episodes: boolean = true;
  open_favourite_episodes: boolean = false;

  open_ae(){
    this.open_all_episodes = true;
    this.open_favourite_episodes = false;
  }

  open_fe(){
    this.open_favourite_episodes = true;
    this.open_all_episodes = false;
  }
}
