import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  uiService = inject(UiService);
  ngxService = inject(NgxTranslateService);
}
