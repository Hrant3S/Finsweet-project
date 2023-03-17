import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoinNew } from 'src/app/component/join-now/join-now.component';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(public activeRoute: ActivatedRoute) {
    console.log(this.activeRoute);
  }


  
  public joinNew: JoinNew[] = [
    {
      id: 1,
      title: 'Join our team to be a part of our story',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      button: 'Join Now',
    },
  ];
}
