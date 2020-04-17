import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public newReleses: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.realeses();
  }

  private realeses(): void {
    this.spotifyService.getRealeses().subscribe((response: any) => {
      console.log(response)
      this.newReleses = response.albums.items;
    });
  }

  ngOnInit(): void {
  }

}
