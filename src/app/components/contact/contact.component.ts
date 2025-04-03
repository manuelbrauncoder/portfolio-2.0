import { Component, inject } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { TranslateModule } from '@ngx-translate/core';
import { NgxTranslateService } from '../../services/ngx-translate.service';

@Component({
    selector: 'app-contact',
    imports: [ContactFormComponent, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private ngxService = inject(NgxTranslateService);

  constructor(){
    this.ngxService.initNgxTranslate();
  }

}
