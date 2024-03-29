import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtitsComponent } from './components/artits/artits.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotimagePipe } from './pipes/notimage.pipe';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomsanitezerPipe } from './pipes/domsanitezer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtitsComponent,
    NavbarComponent,
    NotimagePipe,
    CardComponent,
    LoadingComponent,
    DomsanitezerPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
