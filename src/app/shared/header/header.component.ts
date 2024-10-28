import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavToggleComponent } from '../../components/nav-toggle/nav-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showSidebar = false;

  changeMenuState(state: boolean) {
    this.showSidebar = state;
  }

  toggleSidebar(){
    this.showSidebar = !this.showSidebar;
  }
}
