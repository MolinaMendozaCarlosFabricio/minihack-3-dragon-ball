import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPersonajesComponent } from './view-personajes/view-personajes.component';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';



@NgModule({
  declarations: [
    ViewPersonajesComponent,
    CardPersonajeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ViewPersonajesComponent
  ]
})
export class PersonajesModule { }
