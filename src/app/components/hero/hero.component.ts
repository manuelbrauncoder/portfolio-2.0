import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedWriterModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

  words: string[] = ['Manuel Braun'];
  showcursor = true;

  constructor(){
    this.ngxService.initNgxTranslate();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showcursor = false;
    }, 5000);
  }

}
