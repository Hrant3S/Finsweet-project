import { Component, Input } from '@angular/core';

export interface BlogPost {
  id: number;
  img?: string;
  text: string;
  textUs?: string;
  dataText: string;
  dataSpanText: string;
  title?: string;
}

@Component({
  selector: 'app-view-all-post',
  templateUrl: './view-all-post.component.html',
  styleUrls: ['./view-all-post.component.css'],
})
export class ViewAllPostComponent {
  @Input() element: BlogPost[] = [];
}
