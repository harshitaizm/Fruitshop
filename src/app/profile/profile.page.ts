import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ProfilePage {
  profile = {
    name: 'Sneha',
    username: 'sneha_shop',
    email: 'sneha456@example.com',
    phone: '+91 8709256345',
    location: 'Phagwara, Punjab',
    memberSince: 'January 2023',
    orders: 18,
    points: 420,
    bio: 'Loves serving customers with the freshest fruits every day',
  };

  constructor(private router: Router) {}

  back() {
    this.router.navigateByUrl('/tabs/tab1');
  }

  logout() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  noop() {}
}
