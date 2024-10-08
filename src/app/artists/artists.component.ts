import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css',
})
export class ArtistsComponent {
  @Input() artist: any;
}
