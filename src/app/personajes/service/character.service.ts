import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterSerialization } from '../interface/character-serialization';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
 _url: string = "https://rickandmortyapi.com/api/";

  constructor(private _http: HttpClient) { }

  get_by_id(url: string): Observable<CharacterSerialization>{
    return this._http.get<CharacterSerialization>(url);
  }
}
