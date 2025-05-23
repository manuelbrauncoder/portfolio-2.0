import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { dabubble, epl, join } from '../../shared/projects';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit, OnChanges {
  ngxService = inject(NgxTranslateService);

  @Input() currentProject: 'dabubble' | 'join' | 'epl' = 'dabubble';
  @Output() triggerClose = new EventEmitter();
  project: Project | null = null;

  triggerCloseInParent() {
    this.triggerClose.emit();
  }

  ngOnInit(): void {
    this.setCurrentProject(this.currentProject);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setCurrentProject(this.currentProject);
  }

  setCurrentProject(project: 'dabubble' | 'join' | 'epl') {
    if (project === 'dabubble') this.project = dabubble;
    if (project === 'join') this.project = join;
    if (project === 'epl') this.project = epl;
  }

  nextProject() {
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

  prevProject() {
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
