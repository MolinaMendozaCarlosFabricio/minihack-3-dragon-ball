import { Component, Input } from '@angular/core';
import { EpisodeSerialization } from '../interface/episode-serlialization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-row-episode',
  templateUrl: './row-episode.component.html',
  styleUrl: './row-episode.component.css'
})
export class RowEpisodeComponent {
  @Input() episode!: EpisodeSerialization;

  constructor(private Router: Router){}

  viewCharacters(): void {
    this.Router.navigate(['/characters', this.episode.id]);
  }
}
