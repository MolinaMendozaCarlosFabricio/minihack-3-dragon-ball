import { Component, Input } from '@angular/core';
import { CharacterSerialization } from '../interface/character-serialization';

@Component({
  selector: 'app-carta-personaje',
  templateUrl: './carta-personaje.component.html',
  styleUrl: './carta-personaje.component.css'
})
export class CartaPersonajeComponent {
  @Input() pg: CharacterSerialization | null = null;
}
