import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { dabubble, epl, join } from '../../shared/projects';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit, OnChanges {

  @Input() currentProject: 'dabubble' | 'join' | 'epl' = 'dabubble';
  project: Project | null = null; 

  ngOnInit(): void {
    this.setCurrentProject(this.currentProject);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setCurrentProject(this.currentProject);    
  }

  setCurrentProject(project: 'dabubble' | 'join' | 'epl'){
    if(project === 'dabubble') this.project = dabubble;
    if(project === 'join') this.project = join;
    if(project === 'epl') this.project = epl;
  }

  nextProject(){
    switch (this.currentProject) {
      case 'dabubble':
        this.setCurrentProject('join');
        this.currentProject = 'join';
        break;
        case 'join':
        this.setCurrentProject('epl');
        this.currentProject = 'epl';
        break;
        case 'epl':
        this.setCurrentProject('dabubble');
        this.currentProject = 'dabubble';
        break;
    
      default:
        break;
    }
  }

  prevProject(){
    switch (this.currentProject) {
      case 'dabubble':
        this.setCurrentProject('epl');
        this.currentProject = 'epl';
        break;
        case 'join':
        this.setCurrentProject('dabubble');
        this.currentProject = 'dabubble';
        break;
        case 'epl':
        this.setCurrentProject('join');
        this.currentProject = 'join';
        break;
    
      default:
        break;
    }
  }

}
