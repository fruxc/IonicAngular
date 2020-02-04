import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';
import { RouterModule } from '@angular/router';

import { FormPage } from './form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FormPageRoutingModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
