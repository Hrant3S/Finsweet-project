import { BlogPostComponent } from './blog-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { SharedModule } from 'src/app/component/shared/shared.module';


@NgModule({
  declarations: [BlogPostComponent],
  imports: [
    CommonModule,
    BlogPostRoutingModule,
    SharedModule,
  ]
})
export class BlogPostModule { }
