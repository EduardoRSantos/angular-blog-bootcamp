import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card-response.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "";
  @Input()
  cardTitles: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  Id: string = "0";

  constructor() {}
}
