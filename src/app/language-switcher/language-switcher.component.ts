import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { LangDefinition, TranslocoService } from '@jsverse/transloco';
import { UserService } from '../shared/service/common/user.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
})
export class LanguageSwitcherComponent {
  constructor(
    private translocoService: TranslocoService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private userService: UserService
  ) {
    const resolver = (lang: string) => {
      if (lang === 'en') lang = 'gb';
      return this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/svg-country-flags/${lang}.svg`
      );
    };
    this.matIconRegistry.addSvgIconResolver(resolver);
  }

  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  get availableLangs(): LangDefinition[] {
    return this.translocoService.getAvailableLangs() as LangDefinition[];
  }

  changeLang(lang: string) {
    this.translocoService.load(lang).subscribe(() => {
      this.translocoService.setActiveLang(lang);
      this.userService.preferences = {...this.userService.preferences, lastLanguage: lang};
    });
  }
}
