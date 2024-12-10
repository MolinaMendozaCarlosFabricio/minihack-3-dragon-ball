import { Component, Input } from '@angular/core';
import { CharacterSerialization } from '../interface/character-serialization';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrl: './card-personaje.component.css'
})
export class CardPersonajeComponent {
  @Input() pg: CharacterSerialization | null = null;  
}
