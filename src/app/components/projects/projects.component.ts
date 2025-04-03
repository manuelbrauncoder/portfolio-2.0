import { Component, inject } from '@angular/core';
import { projects } from '../../shared/projects';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { LanguageEnum } from "../../enums/languageEnum";

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  ngxService = inject(NgxTranslateService);

  projects = projects;
  language = LanguageEnum
}
