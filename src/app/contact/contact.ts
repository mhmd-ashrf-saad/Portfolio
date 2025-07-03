import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  title = 'Contact';
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Loading state
  isSubmitting = false;

  constructor() {
    // Initialize EmailJS with your User ID
    emailjs.init("2Kc4YOe-owfZOqIM4"); //  User ID --> pubilc key on email js
  }

  onSubmit() {
    // Validate form
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    this.isSubmitting = true;

    // EmailJS service configuration
    const serviceID = 'service_qjs9qm5'; // Replace with your Service ID
    const templateID = 'template_1e4zrib'; // Replace with your Template ID

    // Template parameters
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
      to_email: 'mhmd.ashrf.saad@gmail.com'
    };

    // Send email
    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        this.resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
