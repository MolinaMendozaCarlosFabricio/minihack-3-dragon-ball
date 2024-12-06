import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/episode`);
  }

  getCharactersByEpisode(episodeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/episode/${episodeId}`);
  }
}
