import { CategoryNComponent } from './category-n.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryNRoutingModule } from './category-n-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryNComponent],
  imports: [
    CommonModule,
    CategoryNRoutingModule,
    ReactiveFormsModule,
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
export class CategoryNModule {}
