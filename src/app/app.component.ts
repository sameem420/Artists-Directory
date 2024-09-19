import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ArtistsComponent } from './artists/artists.component';
import { SearchArtistsPipe } from './search-artists.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ArtistsComponent,
    SearchArtistsPipe,
    ArtistDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;
  currentArtist: any;

  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
    this.currentArtist = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe((data) => {
      this.artists = data;
    });
  }

  showArtist(artist: any): void {
    this.query = artist.name;
    artist.highlight = !artist.highlight;
    this.currentArtist = artist;
  }
}
