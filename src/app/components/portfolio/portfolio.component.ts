import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeIn, slideIn } from "../../shared/animations";
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  animations: [fadeIn, slideIn],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  showDetailView = false;
  currentProject: 'dabubble' | 'join' | 'epl' = 'dabubble'
  showProjectImage: 'dabubble' | 'join' | 'epl' | '' = '';

  async onMouseOver(project: 'dabubble' | 'join' | 'epl' | ''){
      this.showProjectImage = project;
  }

  onMouseLeave(){
    this.showProjectImage = '';
  }

  openProjectDetails(project: 'dabubble' | 'join' | 'epl') {
    this.currentProject = project;
    this.showDetailView = true;
  }

  closeProjectDetails() {
    this.showDetailView = false;
  }

  

}
