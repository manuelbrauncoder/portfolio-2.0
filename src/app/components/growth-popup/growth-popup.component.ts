import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
    selector: 'app-growth-popup',
    imports: [TranslateModule],
    templateUrl: './growth-popup.component.html',
    styleUrl: './growth-popup.component.scss'
})
export class GrowthPopupComponent {
  ngxService = inject(NgxTranslateService);

}
