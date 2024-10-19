import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeIn } from "../../shared/animations";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeIn],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  showProjectImage: 'dabubble' | 'join' | 'epl' | '' = '';
  showImage = false;

  onMouseOver(project: 'dabubble' | 'join' | 'epl' | ''){
    this.showProjectImage = project;
    this.showImage = true;
  }

  onMouseLeave(){
    this.showProjectImage = '';
    this.showImage = false;
  }

}
