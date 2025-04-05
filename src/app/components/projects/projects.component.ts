import { Component, inject } from '@angular/core';
import { projects } from '../../shared/projects';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { LanguageEnum } from "../../enums/languageEnum";
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [TranslateModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  ngxService = inject(NgxTranslateService);

  projects = projects;
  language = LanguageEnum
}
