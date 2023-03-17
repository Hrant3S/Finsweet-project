import { Component, Input } from '@angular/core';

export interface BlogPost {
  id: number;
  img: string;
  text: string;
  textUs: string;
  dataText: string;
  dataSpanText: string;
  title: string;
}

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
})
export class AllPostComponent {
  @Input() element: BlogPost[] = [];
}
