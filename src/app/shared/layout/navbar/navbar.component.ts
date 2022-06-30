import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
conter="3";
  constructor(private translateConfigService: TranslateConfigService ,
     @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) 
  { }
  
  theme: Theme = 'light-theme';

  ngOnInit(): void {
    this.initializeTheme();
  }

  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}
export type Theme = 'light-theme' | 'dark-theme';

