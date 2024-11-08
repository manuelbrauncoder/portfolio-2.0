import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { fadeIn } from "../../shared/animations";
import { ConfirmPopupComponent } from "../confirm-popup/confirm-popup.component";
import { NgxTranslateService } from '../../services/ngx-translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  animations: [fadeIn],
  imports: [CommonModule, FormsModule, RouterLink, ConfirmPopupComponent, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private http = inject(HttpClient);
  private ngxService = inject(NgxTranslateService);

  mailtest = true;
  endPoint = 'https://beta-test.manuel-braun.net/sendMail.php';
  showConfirmPopup = false;

  contact = {
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false,
  };

  constructor() {
    this.ngxService.initNgxTranslate();
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && !this.mailtest) {
      console.log(this.contact);
      this.handleSendMail(ngForm)
    } else if (ngForm.valid && ngForm.submitted && this.mailtest) {
      console.log(this.contact);
      this.confirm();
      ngForm.resetForm();
    }
  }

  toggleCheckbox() {
    this.contact.acceptPrivacy = !this.contact.acceptPrivacy;
  }

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

  handleSendMail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contact)).subscribe({
      next: (response) => {
        ngForm.resetForm();
      },
      error: (error) => {
        console.error('Error sending mail:', error);
      },
      complete: () => {
        this.confirm();
      },
    });
  }

  confirm() {
    this.showConfirmPopup = true;
    setTimeout(() => {
      this.showConfirmPopup = false;
    }, 3500);
  }
}
