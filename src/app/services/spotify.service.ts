import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getRealeses() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQBo_JzTh1n4gU313dRMGFt1nzpyJ1tfdhMNw1k_qgD9BhiB8vcMkO6etagynHuoS9AzUMcSOPtEoIO2DIs"
    })
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers });
  }
}
