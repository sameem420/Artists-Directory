import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  standalone: true,
  imports: [],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.css',
})
export class ArtistDetailsComponent {
  @Input() artist: any;
}
