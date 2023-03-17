import { Component, Input } from '@angular/core';

export interface ChooseName {
  id: number;
  img: string;
  title: string;
  categorytext: string;
}

@Component({
  selector: 'app-choose-catagory',
  templateUrl: './choose-catagory.component.html',
  styleUrls: ['./choose-catagory.component.css'],
})
export class ChooseCatagoryComponent {
  @Input() element: ChooseName[] = [];
}
