import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-toggle.component.html',
  styleUrl: './nav-toggle.component.scss'
})
export class NavToggleComponent {
  @Input() inSidebar = false;
  language: 'en' | 'de' = 'en';

  toggleLanguage(lg: 'en' | 'de') {
    this.language = lg; 
  }
}
