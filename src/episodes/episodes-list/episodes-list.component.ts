import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: any[] = [];
  characters: any[] = [];
  selectedEpisode: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService, private Router: Router) {}

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodes().subscribe((response) => {
      this.episodes = response.results;
    });
  }

  viewCharacters(episodeId: number): void {
    this.Router.navigate(['/characters', episodeId]);
  }
}
