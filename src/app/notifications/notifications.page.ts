import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class NotificationsPage {
  notifications = [
    {
      id: 1,
      title: 'New Mango Season!',
      message: 'Fresh mangoes from Punjab are now available. Get yours before they\'re gone!',
      date: '2023-10-01',
      icon: 'leaf',
      color: 'success'
    },
    {
      id: 2,
      title: 'Flash Sale: 20% Off on Berries',
      message: 'Enjoy 20% discount on all berries this week. Limited time offer!',
      date: '2023-10-02',
      icon: 'heart',
      color: 'danger'
    },
    {
      id: 3,
      title: 'Delivery Update',
      message: 'Your order of apples and oranges has been shipped. Track your delivery now.',
      date: '2023-10-03',
      icon: 'bicycle',
      color: 'primary'
    },
    {
      id: 4,
      title: 'New Fruit Alert: Dragon Fruit',
      message: 'Try our exotic dragon fruit! Rich in vitamins and unique in taste.',
      date: '2023-10-04',
      icon: 'star',
      color: 'warning'
    },
    {
      id: 5,
      title: 'Customer Appreciation',
      message: 'Thank you for shopping with us! Here\'s a special coupon for your next purchase.',
      date: '2023-10-05',
      icon: 'gift',
      color: 'tertiary'
    }
  ];
}
