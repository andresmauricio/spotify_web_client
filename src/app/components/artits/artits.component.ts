import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artits',
  templateUrl: './artits.component.html',
  styles: [
  ]
})
export class ArtitsComponent implements OnInit {
  public artist: any;
  public topTracks: any[];
  public loading: boolean;

  constructor(private activeRouter: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.routerSubscribe();
   }

   private routerSubscribe() {
    this.activeRouter.params.subscribe((param: any) => {
      this.getData(param.id);
      this.tracks(param.id);
    });
   }

   private tracks(idArtist: string) {
    this.spotifyService.getTopTracks(idArtist).subscribe((response: any) => {
      console.log(response);
      this.topTracks = response;
    })
   }

   private getData(idArtist: string) {
    this.spotifyService.getArtistProfile(idArtist).subscribe((response: any) => {
      this.artist = response;
      this.loading = false;
    });
   }

  ngOnInit(): void {
  }

}
