import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getRealeses() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQB4jpHthvxD1uQ8e83_J9wUoKpu2SKSINYIOrzQwzqSYdeXVkRWtcv4XdFktEPMPNbpshcRExi5Z7V-w28"
    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }

  public getArtist(terms: string) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQB4jpHthvxD1uQ8e83_J9wUoKpu2SKSINYIOrzQwzqSYdeXVkRWtcv4XdFktEPMPNbpshcRExi5Z7V-w28"
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${terms}&type=artist`, { headers });
  }
}
