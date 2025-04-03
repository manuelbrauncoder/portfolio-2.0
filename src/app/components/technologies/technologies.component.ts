import { Component, inject } from '@angular/core';
import { newSkills } from '../../shared/skills';
import { GrowthPopupComponent } from '../growth-popup/growth-popup.component';
import { fadeIn } from '../../shared/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-technologies',
  animations: [fadeIn],
  imports: [GrowthPopupComponent, TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

  skills = newSkills;
  showGrowthPopup = false;


  constructor() {
    this.ngxService.initNgxTranslate();
  }

  handleMouseHover() {
    this.showGrowthPopup = true;
  }

  handleMouseLeave() {
    this.showGrowthPopup = false;
  }
}