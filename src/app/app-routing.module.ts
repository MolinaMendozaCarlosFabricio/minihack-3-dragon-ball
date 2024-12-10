import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from '../episodes/episodes-list/episodes-list.component';
import { ViewPersonajesComponent } from './personajes/view-personajes/view-personajes.component';
import { ViewHomeComponent } from './home/view-home/view-home.component';

const routes: Routes = [
  {path:'',component: ViewHomeComponent},
  {path:'characters/:id', component: ViewPersonajesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
