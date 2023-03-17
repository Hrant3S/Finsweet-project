import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/component/all-post/all-post.component';
import { ChooseName } from 'src/app/component/choose-catagory/choose-catagory.component';
import { JoinNew } from 'src/app/component/join-now/join-now.component';
import { RequestService } from 'src/app/service/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  chooseName: ChooseName[] = [];
  blogPost: BlogPost[] = [];
  i: number =1;

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.setChooseName()
    this.setBlogPost()
  }
  setChooseName() {
    this.request.getData<ChooseName []>(environment.chooseName.get).subscribe((item) => {
        this.chooseName = item;
      });
  }

  setBlogPost() {
    this.request.getData<BlogPost []>(environment.blogPost.get + `?_page=$(this.i)&_limit=5`).subscribe((item) => {
      this.blogPost = item;
    });
  }


  public joinNew: JoinNew[] = [
    {
      id: 1,
      title:'Join our team to be a part of our story',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      button: 'Join Now'
    }
  ];


}
