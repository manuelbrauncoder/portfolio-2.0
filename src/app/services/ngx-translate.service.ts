/**
 * service file for handling ngx translate
 * use in components:
 * 
 * inject service and
 * import { TranslateModule } from '@ngx-translate/core';
 * add TranslateModule to imports array
 * call initNgxTranslate() in constructor
 * use translate pipe in template
 * example: {{ 'header.about' | translate }}
 * 
 * the translations are stored in assets/i18n
 */

import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateService {
  private translate = inject(TranslateService);

  private projects: Project[] = [];

  initNgxTranslate(){
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.changeLanguage('en');
  }

  changeLanguage(language: 'en' | 'de') {
    this.translate.use(language);
  }

  getCurrentLanguage(){
    return this.translate.currentLang;
  }
}
