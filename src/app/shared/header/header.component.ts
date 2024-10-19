import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  language: 'en' | 'de' = 'en';

  toggleLanguage(lg: 'en' | 'de') {
    this.language = lg; 
  }
}
