import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
    selector: 'app-root',
    imports: [YouTubePlayerModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  ready = false;
  stateChange = false
}
