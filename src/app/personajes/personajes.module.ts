import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPersonajesComponent } from './view-personajes/view-personajes.component';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { CartaPersonajeComponent } from './carta-personaje/carta-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewPersonajesComponent,
    CardPersonajeComponent,
    CartaPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewPersonajesComponent
  ]
})
export class PersonajesModule { }
