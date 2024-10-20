import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contact = {
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false
  }

  onSubmit(ngForm: NgForm) {
    console.log(this.contact); 
  }

  toggleCheckbox(){
    this.contact.acceptPrivacy = !this.contact.acceptPrivacy;
    console.log(this.contact.acceptPrivacy);
    
  }
}
