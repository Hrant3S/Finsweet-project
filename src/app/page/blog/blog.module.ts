import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/component/shared/shared.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
  ]
})
export class BlogModule { }
