import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private headers;
  private API = environment.api;

  constructor(private http: HttpClient) { 
    this.setHeaders();
  }

  private queryApi(query: string) {
    return this.http.get(`${this.API}${query}`, { headers: this.headers });
  }

  public getRealeses() {
    return this.queryApi("browse/new-releases").pipe(map((data: any) => data.albums.items));
  }

  public getArtist(terms: string) {
    return this.queryApi(`search?q=${terms}&type=artist`).pipe(map((data: any) => data.artists.items)); 
  }

  private setHeaders() {
     this.headers = new HttpHeaders({
      "Authorization": "Bearer BQB4jpHthvxD1uQ8e83_J9wUoKpu2SKSINYIOrzQwzqSYdeXVkRWtcv4XdFktEPMPNbpshcRExi5Z7V-w28"
    })
  }
}
