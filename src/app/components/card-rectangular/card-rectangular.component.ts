import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-rectangular',
  templateUrl: './card-rectangular.component.html',
  styleUrls: ['./card-rectangular.component.css'],
})
export class CardRectangularComponent {
  @Input() valueInvestment!: string;
  @Input() title!: string;
}
