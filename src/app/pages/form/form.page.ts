import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
    user = {
      fname: '',
      lname: '',
      mail: '',
      phone: '',
      add1: '',
      add2: '',
      city: '',
      state: '',
      zip: '',
      date: '',
    };
  myDate: string;
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private datePicker: DatePicker,
    private router: Router
    ) { }
  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you really want to <strong>SUBMIT</strong>???',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            const navigationExtras: NavigationExtras = {
              state: {
                user: this.user
              }
            };
            this.router.navigate(['details'], navigationExtras);
          }
        }
      ]
    });

    await alert.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Form Actions',
      buttons: [{
        text: 'Home',
        role: 'Home',
        icon: 'Home',
        handler: () => {
          console.log('Home clicked');
          this.router.navigate(['home']);
        }
      }, {
        text: 'Clear',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
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

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText: 'Save Date',
      todayText: 'Set Today'
    }).then(
      date => {
        this.myDate = date.getDate() + '/' + date.toLocaleString('default', { month: 'long' }) + '/' + date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
