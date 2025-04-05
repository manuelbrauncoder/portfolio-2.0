import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { fadeIn } from '../../shared/animations';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { TranslateModule } from '@ngx-translate/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-contact-form',
  animations: [fadeIn],
  imports: [CommonModule, FormsModule, ConfirmPopupComponent, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private http = inject(HttpClient);
  private ngxService = inject(NgxTranslateService);
  uiService = inject(UiService);

  mailtest = false;
  endPoint = 'https://beta-test.manuel-braun.net/sendMail.php';
  showConfirmPopup = false;
  popupMessage = '';

  err_de = 'Oops, da ist etwas schief gelaufen.';
  err_en = 'Sorry, something went wrong.';

  success_de =
    'Danke für deine Nachricht. Ich werde mich so schnell wie möglich melden.';
  success_en =
    'Thanks for your message, i will contact you as soon as possible.';

  contact = {
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false,
  };

  constructor() {
    this.ngxService.initNgxTranslate();
  }

  /**
   * Send the email if form is valid and mailtest is set to false
   *
   * @param ngForm
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && !this.mailtest) {
      console.log(this.contact);
      this.handleSendMail(ngForm);
    } else if (ngForm.valid && ngForm.submitted && this.mailtest) {
      console.log(this.contact);
      this.setMessage(true);
      this.confirm();
      ngForm.resetForm();
    }
  }

  toggleCheckbox() {
    this.contact.acceptPrivacy = !this.contact.acceptPrivacy;
  }

  /**
   * Defines the post method
   */
  post = {
    endPoint: this.endPoint,
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Send a Post Request to the php endpoint and
   * handle Error and Confirmation
   *
   * @param ngForm
   */
  handleSendMail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contact)).subscribe({
      next: (response) => {
        ngForm.resetForm();
      },
      error: (error) => {
        console.error('Error sending mail:', error);
        this.setMessage(false);
        this.confirm();
      },
      complete: () => {
        this.setMessage(true)
        this.confirm();
      },
    });
  }

  /**
   * show the popup and hides it after timeout
   */
  confirm() {
    this.showConfirmPopup = true;
    setTimeout(() => {
      this.showConfirmPopup = false;
    }, 3500);
  }

  /**
   * Set the confirmation or error message
   * in the choosen language
   * @param success
   */
  setMessage(success: boolean) {
    const lang = this.ngxService.getCurrentLanguage();
    if (lang === 'en') {
      this.popupMessage = success ? this.success_en : this.err_en;
    } else {
      this.popupMessage = success ? this.success_de : this.err_de;
    }
  }
}
