import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { UiService } from '../../services/ui.service';

@Component({
    selector: 'app-privacy',
    imports: [TranslateModule],
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

}
