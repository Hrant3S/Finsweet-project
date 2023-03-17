import { LoginPageComponent } from './login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule
  ]
})
export class LoginPageModule { }
