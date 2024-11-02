import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-nav-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-toggle.component.html',
  styleUrl: './nav-toggle.component.scss',
})
export class NavToggleComponent {
  @Input() inSidebar = false;
  language: 'en' | 'de' = 'en';

  constructor() {}

  uiService = inject(UiService);

  toggleLanguage(lg: 'en' | 'de') {
    this.language = lg;
  }
}
