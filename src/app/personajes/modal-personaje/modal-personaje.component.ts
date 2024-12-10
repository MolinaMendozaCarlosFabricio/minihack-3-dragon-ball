import { Component, Input, OnInit } from '@angular/core';
import { CharacterSerialization } from '../interface/character-serialization';
import { LocationService } from '../service/location.service';
import { LocationSerialization } from '../interface/location-serialization';
import { FavouriteEpisodesService } from '../service/favourite-episodes.service';

@Component({
  selector: 'app-modal-personaje',
  templateUrl: './modal-personaje.component.html',
  styleUrl: './modal-personaje.component.css'
})
export class ModalPersonajeComponent implements OnInit {
  @Input() pg: CharacterSerialization | null = null;
  @Input() id_episode: number = 0;
  location: LocationSerialization | null = null;
  isVisible: boolean = false;

  constructor(private locationServices: LocationService, private favouriteEpisodesServices: FavouriteEpisodesService){}

  open(){
    this.isVisible = true;
  }
  close(){
    this.isVisible = false;
  }

  ngOnInit(): void {
      this.get_actual_location();
  }

  get_actual_location(){
    if(this.pg?.location.url){
      this.locationServices.get_by_id(this.pg?.location.url).subscribe(
        response => {
          console.log("Respuesta del servidor:", response);
          this.location = response;
        },
        error => console.log("Error:", error)
      )
    }
  }

  add_favourite_episode(){
    this.favouriteEpisodesServices.put(this.id_episode);
  }
}