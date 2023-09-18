import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'spa-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular';

  ngOnInit() {
    window.addEventListener('logout', this.logout);
  }

  logout(): void {
    console.log('logout event received');
  }

  ngOnDestroy(): void {
    window.removeEventListener('logout', this.logout);
  }
}
