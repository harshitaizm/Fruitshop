import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab2Page {

  searchTerm: string = '';

  fruits = [
    { name: 'Apple', category: 'citrus', price: 120, desc: '', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce' },
    { name: 'Banana', category: 'tropical', price: 60,  desc: '',image: 'https://cdn.pixabay.com/photo/2011/03/24/10/12/banana-5734_640.jpg' },
    { name: 'Mango', category: 'tropical', price: 150, image: 'https://imgs.search.brave.com/B9sRs9LfVatRV1Z4jK8M9UKy5U1P_AzZ4DYRR0QyD2Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4L2Vm/L2UwLzQ4ZWZlMDFi/MzA0NTRiNTAzMDE1/NDNhZmNhYjA0MmZh/LmpwZw' },
    { name: 'Orange', category: 'citrus', price: 90, image: 'https://imgs.search.brave.com/SkXJYRc3Yzk5ppc3vA_K2sQtdfj14VZ0w6GLTOpd8TA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNhLzgw/LzM5LzNhODAzOTUw/ZDZiNTE3YjljYjY5/Y2ViYzAwODdjZTY5/LmpwZw' },
    { name: 'Strawberry', category: 'berries', price: 250, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2' },
    { name: 'Pineapple', category: 'tropical', price: 180,  image: 'https://imgs.search.brave.com/6-mArGgazCY9wRxMLSe8toQhubS8H_sR_hK_8_PCJeY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8x/MS8xMS8xNS80Mi9w/aW5lYXBwbGUtMzgw/ODk2M182NDAuanBn' },
    { name: 'Grapes', category: 'berries', price: 140, desc: '-', image: 'https://imgs.search.brave.com/kxh_deKR_f0ZhgDxxsRAf7KSitLCfz42iGo_A_yo738/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNTUvNDU4NTUt/MDA0LUY2OTY3MjIy/L1RhcnRhcmljLWFj/aWQtZnJ1aXRzLWdy/YXBlcy5qcGc' },
  { name: 'Watermelon', category: 'tropical', price: 70, image: 'https://imgs.search.brave.com/JMHp0tCM0cmSEh0TBn4zGl_e2Ft-vSrqK0gYvaCWbws/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFMcjRMdjVHY0wu/anBn' },
  { name: 'Papaya', category: 'tropical', price: 90, image: 'https://imgs.search.brave.com/6grK44r1Coh5VPRFCM_0m1r0lMIZeV_0mjGNhvdbrkY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYXBh/eWEtZnJ1aXQtODU0/MjI4My5qcGc' },
  { name: 'Kiwi', category: 'exotic', price: 220, image: 'https://imgs.search.brave.com/KsILpaesOFTllqXhAluowom0Mt2DB33OgUiAHs0Eq0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NzIyNDU5Ni9waG90/by9wbGF0ZS1vZi1z/bGljZWQtYW5kLXdo/b2xlLWZyZXNoLWtp/d2ktZnJ1aXQud2Vi/cD9hPTEmYj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNBWDF3/MEJ4MkFlWlNOZ2Ji/aFcybnBUZDFBR0Y3/VWVjOGpVeDZnbGQx/eDg9' },
  { name: 'Pomegranate', category: 'berries', price: 200, image: 'https://imgs.search.brave.com/sx68zieHD7YEtG1k8E0L99Sm73nHTCMxWQuJREqaMyc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzMyLzQ3LzM2/LzM2MF9GXzQzMjQ3/MzY4OF9OQkZhTUg5/TDdMczBrdkF4bkNa/blJsdmJDYVNneG96/Qi5qcGc' },
  { name: 'Guava', category: 'tropical', price: 80,  image: 'https://imgs.search.brave.com/oGo472FcWP3GBESYHKlIcwNNYLHnXuP7XKTo_P6pUzg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NDA3NDY3Ny9waG90/by9hLWJhc2tldC1v/Zi1ndWF2YS1mcnVp/dHMtZm9yLXNhbGUt/b3V0c2lkZS10aGUt/ZW50cmFuY2UtdG8t/cGhub20ta2FtcG9u/Zy10cmFuY2gtb24t/dHVlc2RheS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dV8y/SzZyY2FJUUV0bXhU/Y2lxYW1uSnVGSnRL/cjI5b0RTOGk5QS1r/dFZ1dz0' },
  { name: 'Lemon', category: 'citrus', price: 50, image: 'https://imgs.search.brave.com/rhqVnBmkKNRGmRWH22oTL2hskhF_EkMNkgR-RyAGl88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZW9u/c2ZydWl0c2hvcC5j/by51ay93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNi9MZW9u/cy1GcnVpdC1TaG9w/LTQ1LmpwZw' },
  { name: 'Cherry', category: 'berries', price: 300,  image: 'https://imgs.search.brave.com/cgzvsQks-oqkgSpTtfZMkY_L83aHFw4fJ41AF35WNG8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFMZFluM0lqMEwu/anBn' },
  { name: 'Lychee', category: 'tropical', price: 250, image: 'https://imgs.search.brave.com/J3_9D74xIYcpl0j1ieHi18kndvnv5oPCnagXngVrZp8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2TnhCMHAxbFMu/anBn' },
  { name: 'Dragon Fruit', category: 'exotic', price: 280,  image: 'https://imgs.search.brave.com/vR2rPyhxOJaCdmWG22UYSeGAhKAmD3lLG_pdPGJgOaY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bW9yZS1kcmFnb24t/ZnJ1aXQtcGljdHVy/ZXMtYXMtcHJvbWlz/ZWQtdjAtcGN3a3o0/OXQwamQ5MS5qcGc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9NTYz/ZmI3M2JhNjQ3NGNj/NzMwM2JlNjU1YThl/M2VlNTMwNmQxMjVh/YQ' }

  ];
// Create a separate array to display filtered fruits
  filteredFruits = [...this.fruits];

  constructor(private cartService: CartService, private router: Router) {}

  // Function to filter fruits by category or search
  filterFruits(category?: string) {
    if (category) {
      if (category === 'all') {
        this.filteredFruits = [...this.fruits];
      } else {
        this.filteredFruits = this.fruits.filter(fruit => fruit.category === category);
      }
    } else {
      // Search filter
      if (this.searchTerm.trim() === '') {
        this.filteredFruits = [...this.fruits];
      } else {
        this.filteredFruits = this.fruits.filter(fruit =>
          fruit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }
  }

  addToCart(fruit: any) {
    const cartItem: CartItem = {
      name: fruit.name,
      price: fruit.price,
      quantity: 1,
      image: fruit.image,
      desc: fruit.desc
    };
    this.cartService.addToCart(cartItem);
  }

  openNotifications() {
    this.router.navigate(['/notifications']);
  }
 back() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
