import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  ngxService = inject(NgxTranslateService);

  constructor(){
    this.ngxService.initNgxTranslate();
  }


}
