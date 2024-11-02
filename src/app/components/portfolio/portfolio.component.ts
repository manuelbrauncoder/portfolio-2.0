import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { fadeIn } from "../../shared/animations";
import { ProjectComponent } from "../project/project.component";
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslateModule],
  animations: [fadeIn],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  ngxService = inject(NgxTranslateService);

  showDetailView = false;
  currentProject: 'dabubble' | 'join' | 'epl' = 'dabubble'
  showProjectImage: 'dabubble' | 'join' | 'epl' | '' = '';

  constructor(){
    this.ngxService.initNgxTranslate();
  }

  async onMouseOver(project: 'dabubble' | 'join' | 'epl' | ''){
    if (window.innerWidth >= 1199) {
      this.showProjectImage = project;
    }
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
