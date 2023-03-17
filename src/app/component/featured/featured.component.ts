import { Component, Input } from '@angular/core';


export  interface FeatPost {
  id?: number;
  img: string;
  text: string;
  textUs: string;
  dataText: string;
  dataSpanText: string;
  title?: string
}

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  @Input() elements: FeatPost[] = [];
}
