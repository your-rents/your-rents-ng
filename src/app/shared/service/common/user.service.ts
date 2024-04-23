import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { UserPrefs } from '../../model/common/user-prefs';
import { getBrowserLang } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalStorageService) { }

  static readonly USER_PREFS_KEY = 'user-prefs';

  get preferences(): UserPrefs {
    return this.localStorageService.getItem(UserService.USER_PREFS_KEY) || { lastLanguage: getBrowserLang() || 'en' };
  }

  set preferences(prefs: UserPrefs) {
    this.localStorageService.setItem(UserService.USER_PREFS_KEY, prefs);
  }
}
