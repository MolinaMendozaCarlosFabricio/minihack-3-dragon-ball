import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { CharacterSerialization } from '../interface/character-serialization';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-personajes',
  templateUrl: './view-personajes.component.html',
  styleUrl: './view-personajes.component.css'
})
export class ViewPersonajesComponent implements OnInit {
  id_episode_selected: string | null = "";
  pgs_list: CharacterSerialization[] = [];
  url_pgs: string[] = [];

  constructor(private characterServices: CharacterService, private route: ActivatedRoute){}

  ngOnInit(): void {
  }

  get_episode(){
    this.id_episode_selected = this.route.snapshot.paramMap.get('id');
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
  }
}
