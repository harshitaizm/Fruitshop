import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private alertCtrl: AlertController) { }

  async addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }
    this.cartItems.next([...currentItems]);

    // Show alert
    const alert = await this.alertCtrl.create({
      header: 'Added to Cart',
      message: `${item.name} added to cart`,
      buttons: ['OK']
    });
    await alert.present();
  }

  removeFromCart(itemName: string) {
    const currentItems = this.cartItems.value.filter(item => item.name !== itemName);
    this.cartItems.next(currentItems);
  }

  getTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
