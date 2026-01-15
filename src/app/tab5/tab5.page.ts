import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab5Page {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      alert(`Thank you, ${this.contact.name}! Your message has been sent successfully.`);
      this.contact = { name: '', email: '', message: '' }; 
    } else {
      alert('Please fill in all fields before sending.');
    }
  }
}
