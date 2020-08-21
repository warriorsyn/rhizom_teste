import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rhizom-teste';

  private themeWrapper = document.documentElement;

  setGlobalThemes() {
    this.themeWrapper.style.setProperty('--primary', '#fcb040');
    this.themeWrapper.style.setProperty('--primary-light', '#fcc454');
    this.themeWrapper.style.setProperty('--secondary', '#ffffff');

    this.themeWrapper.style.setProperty('--toolbar', '#fff');
    this.themeWrapper.style.setProperty('--success', '#00aa00');
    this.themeWrapper.style.setProperty('--success-light', '#9dd29c');
    this.themeWrapper.style.setProperty('--darker', '#383838');
  }

  ngOnInit(): void {
    this.setGlobalThemes();
  }
}
