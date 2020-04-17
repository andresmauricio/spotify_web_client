import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  public artists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  public search(text) {
    this.spotifyService.getArtist(text).subscribe((response:any) => {
      this.artists = response;
      console.log(response);
      
    })
  }

  ngOnInit(): void {
  }

}
