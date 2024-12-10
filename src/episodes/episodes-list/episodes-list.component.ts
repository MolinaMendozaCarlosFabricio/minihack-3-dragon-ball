import { Component, Input, OnInit } from '@angular/core';
import { RickAndMortyService } from '../service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  @Input() id_episodes!: number[];
  episodes: any[] = [];
  characters: any[] = [];
  selectedEpisode: string | null = null;

  constructor(private rickAndMortyService: RickAndMortyService, private Router: Router) {}

  ngOnInit(): void {
    if(!this.id_episodes){
      this.rickAndMortyService.getEpisodes().subscribe((response) => {
        this.episodes = response.results;
      });
    } else {
      this.episodes = [];
      for(let i: number = 0; i < this.id_episodes.length; i++){
        this.rickAndMortyService.getCharactersByEpisode(this.id_episodes[i]).subscribe(
          response => {
            console.log("It's ok");
            this.episodes.push(response);
          },
          error => console.log("Error:", error)
        )
      }
    }
  }

  viewCharacters(episodeId: number): void {
    this.Router.navigate(['/characters', episodeId]);
  }
}
