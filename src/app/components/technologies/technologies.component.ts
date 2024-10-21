import { Component } from '@angular/core';
import { skills } from "../../shared/skills";
import { GrowthPopupComponent } from "../growth-popup/growth-popup.component";
import { fadeIn } from "../../shared/animations";

@Component({
  selector: 'app-technologies',
  standalone: true,
  animations: [fadeIn],
  imports: [GrowthPopupComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  skills = skills;

  showGrowthPopup = false;

  handleMouseHover(){
    this.showGrowthPopup = true;
  }

  handleMouseLeave(){
    this.showGrowthPopup = false;
  }
}
