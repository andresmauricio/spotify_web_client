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
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.realeses();
  }

  private realeses(): void {
    this.spotifyService.getRealeses().subscribe((response: any) => {
      this.loading = false;
      this.newReleses = response;
    });
  }

  ngOnInit(): void {
  }

}
