import {Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgxTranslateService} from "../../services/ngx-translate.service";
import {UiService} from "../../services/ui.service";

@Component({
    selector: 'app-imprint',
    imports: [TranslateModule],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

  constructor() {
    this.ngxService.initNgxTranslate();
  }
}
