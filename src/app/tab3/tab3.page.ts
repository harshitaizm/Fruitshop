import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,          
  imports: [IonicModule, CommonModule],  
})
export class Tab3Page {

  constructor(private alertCtrl: AlertController) {}

  async showDiscount(title: string, description: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: description,
      buttons: ['OK']
    });
    await alert.present();
  }
}
