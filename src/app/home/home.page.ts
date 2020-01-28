import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { FormPage } from '../form/form.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheetController: ActionSheetController, private router: Router) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cart',
      buttons: [{
        text: 'Remove',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Add to cart',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Added to cart');
        }
      }, {
        text: 'Add to wishlist',
        icon: 'heart',
        handler: () => {
          console.log('Added to wishlist');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goToForm() {
    this.router.navigate(['form']);
  }
}
