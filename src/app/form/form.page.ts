import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  myDate: string;
  myTime: string;
  myDateNTime: string;
  constructor( private datePicker: DatePicker) { }
  ngOnInit() {
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
