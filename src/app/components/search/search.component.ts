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
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  public search(text: string) {
    this.loading = true;
    if (text.length >= 3) {
      this.spotifyService.getArtist(text).subscribe((response:any) => {
        this.artists = response;  
        this.loading = false;    
      });
    }
  }

  ngOnInit(): void {
  }

}
