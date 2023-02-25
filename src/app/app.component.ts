import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-app';
  hideHeader: boolean;
  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((res) => {
      const url = this.router.url.split('?')[0];
      if (url === '/login') {
        this.hideHeader = false;
      } else {
        this.hideHeader = true;
      }
    });
}
}
