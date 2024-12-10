import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPersonajesComponent } from './view-personajes/view-personajes.component';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { FormsModule } from '@angular/forms';
import { ModalPersonajeComponent } from './modal-personaje/modal-personaje.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ViewPersonajesComponent,
    CardPersonajeComponent,
    ModalPersonajeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    ViewPersonajesComponent
  ]
})
export class PersonajesModule { }
