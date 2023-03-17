import { Component, OnInit } from '@angular/core';
import { JoinNew } from 'src/app/component/join-now/join-now.component';
import { LiistAuthors } from 'src/app/component/list-of-authors/list-of-authors.component';
import { RequestService } from 'src/app/service/service/request.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  listAuthors: LiistAuthors[] = []

  ngOnInit(): void {
    this.setListAutors()
  }

  constructor(private request: RequestService){}
  setListAutors(){
    this.request.getData<LiistAuthors []>(environment.listAuthors.get).subscribe((items) =>{
      this.listAuthors = items
    })
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
