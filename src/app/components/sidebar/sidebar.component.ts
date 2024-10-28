import { Component } from '@angular/core';
import { NavToggleComponent } from "../nav-toggle/nav-toggle.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavToggleComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
