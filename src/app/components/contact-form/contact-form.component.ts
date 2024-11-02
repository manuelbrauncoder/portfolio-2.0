import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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
  }
}
