import { AuthorsNComponent } from './authors-n.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthorsNRoutingModule } from './authors-n-routing.module';
import { PostAllRoutingModule } from '../post-all/post-all-routing.module';




@NgModule({
  declarations: [
    AuthorsNComponent
  ],
  imports: [
    CommonModule,
    AuthorsNRoutingModule,
    ReactiveFormsModule,
    PostAllRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class AuthorsNModule { }
