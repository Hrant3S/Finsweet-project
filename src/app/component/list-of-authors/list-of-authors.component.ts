import { Component, Input } from '@angular/core';

export interface LiistAuthors {
  id: number;
  img: string;
  title: string;
  text: string;
  face: string;
  twitt: string;
  insta: string;
  linke: string;
}

@Component({
  selector: 'app-list-of-authors',
  templateUrl: './list-of-authors.component.html',
  styleUrls: ['./list-of-authors.component.css'],
})
export class ListOfAuthorsComponent {
  @Input() element: LiistAuthors[] = [];
}
