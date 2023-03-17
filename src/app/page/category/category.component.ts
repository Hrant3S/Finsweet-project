
import { environment } from './../../../environments/environments';
import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/component/all-post/all-post.component';
import { ChooseName } from 'src/app/component/choose-catagory/choose-catagory.component';
import { RequestService } from 'src/app/service/service/request.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {

  blogPost: BlogPost[] = [];
  chooseName: ChooseName[] = [];

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.setBlogPost()
    this.setChooseName()
  }

  setChooseName() {
    this.request.getData<ChooseName[]>(environment.chooseName.get).subscribe((item) =>{
      this.chooseName = item;
    })
  }

  setBlogPost() {
    this.request.getData<BlogPost[]>(environment.blogPost.get + '?_start=5&_end=9').subscribe((item) =>{
      this.blogPost = item;
    })
  }

}
