import { JoinNew } from 'src/app/component/join-now/join-now.component';
import { environment } from './../../../environments/environments';
import { Component, OnInit } from '@angular/core';
import { ChooseName } from 'src/app/component/choose-catagory/choose-catagory.component';
import { LiistAuthors } from 'src/app/component/list-of-authors/list-of-authors.component';
import { BlogPost } from 'src/app/component/all-post/all-post.component';
import { FeatPost } from 'src/app/component/featured/featured.component';
import { RequestService } from 'src/app/service/service/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
chooseName: ChooseName[] = [];
listAuthors: LiistAuthors[] = [];
blogPost: BlogPost[] = [];
featPost: FeatPost[] = [];

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.setChooseName()
    this.setListAutors()
    this.setBlogPost()
    this.setFeatpost()
  }
  setChooseName() {
    this.request.getData<ChooseName []>(environment.chooseName.get).subscribe((item) => {
        this.chooseName = item;
      });
  }

  setListAutors(){
    this.request.getData<LiistAuthors []>(environment.listAuthors.get + '?_limit=4').subscribe((items) =>{
      this.listAuthors = items
    })
  }
  setBlogPost() {
    this.request.getData<BlogPost[]>(environment.blogPost.get + '?_limit=4').subscribe((items) => {
      this.blogPost = items
    })
  }
  setFeatpost() {
    this.request.getData<FeatPost[]>(environment.featPost.get).subscribe((item) => {
      this.featPost = item
    })
  }





  joinNew: JoinNew[] = [
    {
      id: 1,
      title: "Join our team to be a part of our story",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      button: "Join Now"
    }
  ];
}





