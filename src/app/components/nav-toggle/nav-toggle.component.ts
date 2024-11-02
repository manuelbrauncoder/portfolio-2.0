import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-nav-toggle',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-toggle.component.html',
  styleUrl: './nav-toggle.component.scss',
})
export class NavToggleComponent {
  @Input() inSidebar = false;

  ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

  constructor() {
    this.ngxService.initNgxTranslate();
  }

  scrollToAnchor(section: string, offset: number = 0) {
    if (window.innerWidth <= 899) {
      this.uiService.showSidebar = false;
      setTimeout(() => {
        this.uiService.scrollToAnchor(section, offset)
      }, 300);
    } else {
      this.uiService.scrollToAnchor(section, offset)
    }
  }
}
