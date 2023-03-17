import { Component, Input } from '@angular/core';
import { ChooseName } from '../choose-catagory/choose-catagory.component';



@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css']
})
export class CategoryButtonComponent {
  @Input() element: ChooseName[] = [];
}
