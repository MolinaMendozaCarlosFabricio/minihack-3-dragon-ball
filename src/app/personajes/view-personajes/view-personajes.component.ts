import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { CharacterSerialization } from '../interface/character-serialization';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../../../episodes/service';

@Component({
  selector: 'app-view-personajes',
  templateUrl: './view-personajes.component.html',
  styleUrl: './view-personajes.component.css'
})
export class ViewPersonajesComponent implements OnInit {
  id_episode_selected: string | null = "";
  id_episode: number = 0
  pgs_list: CharacterSerialization[] = [];
  url_pgs: string[] = [];

  constructor(
    private characterServices: CharacterService, 
    private route: ActivatedRoute,
    private episodeServices: RickAndMortyService
  ){}

  ngOnInit(): void {
    this.get_episode();
  }

  get_episode(){
    this.id_episode_selected = this.route.snapshot.paramMap.get('id');
    if(this.id_episode_selected){
      this.id_episode = parseInt(this.id_episode_selected);
      this.episodeServices.getCharactersByEpisode(this.id_episode).subscribe(
        response => {
          console.log("Episodio obtenido:", response);
          this.url_pgs = response.characters;
          this.get_characters_by_episode();
        },
        error => console.log("Error:", error)
      );
    } else {
      console.log("Episodio no encontrado :(")
    }
  }

  get_characters_by_episode(){
    for(let i: number = 0; i < this.url_pgs.length; i++){
      this.characterServices.get_by_id(this.url_pgs[i]).subscribe(
        response => {
          console.log("All it's ok!:", response);
          this.pgs_list.push(response);
        },
        error => console.log("Error:", error)
      );
    }
    console.log(this.pgs_list);
  }

  back(){
    this.id_episode =- 1;
    this.episodeServices.getCharactersByEpisode(this.id_episode).subscribe(
      response => {
        console.log("Episodio obtenido:", response);
        this.url_pgs = response.characters;
        this.get_characters_by_episode();
      },
      error => console.log("Error:", error)
    );
  }
  next(){
    this.id_episode =+ 1;
    this.episodeServices.getCharactersByEpisode(this.id_episode).subscribe(
      response => {
        console.log("Episodio obtenido:", response);
        this.url_pgs = response.characters;
        this.get_characters_by_episode();
      },
      error => console.log("Error:", error)
    );
  }
}
