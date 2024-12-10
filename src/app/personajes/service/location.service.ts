import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationSerialization } from '../interface/location-serialization';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private _http: HttpClient) { }

  get_by_id(url: string): Observable<LocationSerialization>{
    return this._http.get<LocationSerialization>(url);
  }
}
