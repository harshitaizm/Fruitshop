import { Component, EnvironmentInjector, inject, OnInit, OnDestroy } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline,
      searchOutline,
      cartOutline,
      callOutline,
      giftOutline,
      personCircleOutline,
      notificationsOutline,
      trashOutline,
      storefrontOutline,
      bagCheckOutline,
      starHalfOutline,
      star,
      leaf,
      sunny,
      heart
    } from 'ionicons/icons';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, CommonModule],
})
export class TabsPage implements OnInit, OnDestroy {
  public environmentInjector = inject(EnvironmentInjector);
  cartCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {
    addIcons({ homeOutline,
      searchOutline,
      giftOutline,
      cartOutline,
      callOutline,
      personCircleOutline,
      notificationsOutline,
      trashOutline,
      storefrontOutline,
      bagCheckOutline,
      starHalfOutline,
      star,
      leaf,
      sunny,
      heart
    });
  }

  ngOnInit() {
    this.subscription = this.cartService.cartItems$.subscribe(() => {
      this.cartCount = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
