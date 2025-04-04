import { Component, HostListener, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { slideIn } from '../../shared/animations';

@Component({
  selector: 'app-arrow-up',
  imports: [],
  animations: [slideIn],
  templateUrl: './arrow-up.component.html',
  styleUrl: './arrow-up.component.scss'
})
export class ArrowUpComponent {
  uiService = inject(UiService)
  showArrow = false

  scrollToTop() {
    this.uiService.scrollToTop()
  }

  /**
   * set showArrow to true, when scrolling the page
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showArrow = window.scrollY > 600
  }
}
