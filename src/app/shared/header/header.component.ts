import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavToggleComponent } from '../../components/nav-toggle/nav-toggle.component';
import { fadeIn, slideIn } from '../animations';
import { UiService } from '../../services/ui.service';

@Component({
    selector: 'app-header',
    animations: [fadeIn, slideIn],
    imports: [CommonModule, SidebarComponent, NavToggleComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  uiService = inject(UiService);
}
