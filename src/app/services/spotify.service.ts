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

  public getArtistProfile(id: string) {
    return this.queryApi(`artists/${id}`); 
  }

  public getTopTracks(id: string) {
    return this.queryApi(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) =>  data.tracks));
  }

  private setHeaders() {
     this.headers = new HttpHeaders({
      "Authorization": "Bearer BQDWaZE091A7q8ibsLBiuXP-lHO1gy5xjzOuaWByRSmyBiUxS-LpnPHqpgqNyjB9A7VSmFg9eQHk0fMb_yo"
    })
  }
}
