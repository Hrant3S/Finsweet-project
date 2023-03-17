import { Component, Input } from '@angular/core';

export interface JoinNew {
  id: number;
  title: string;
  text: string;
  button: string;
}

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css'],
})
export class JoinNowComponent {
  @Input() element: JoinNew[] = [];
}
