import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab4Page implements OnInit, OnDestroy {

  cartItems: CartItem[] = [];
  total: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.subscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeFromCart(itemName: string) {
    this.cartService.removeFromCart(itemName);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  async checkout() {
    const alert = await this.alertCtrl.create({
      header: 'Order Confirmed!',
      message: 'Thank you for your order. Your fruits will be delivered soon!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
