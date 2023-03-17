import { ContactUsComponent } from './contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from 'src/app/component/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
