import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class Tab1Page {
  constructor(private router: Router) {}
  goToShop() {
    this.router.navigate(['/tabs/tab2']);
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }
}
