import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-payment-card-view',
  templateUrl: './card-payment-card-view.component.html',
  styleUrls: ['./card-payment-card-view.component.css'],
})
export class CardPaymentCardViewComponent {
  @Input() nameCard!: string;
  @Input() typeCard!: string;
  @Input() nameResponsibleCard!: string;
  @Input() numbercard!: string;
  @Input() customStyle!: { [key: string]: string };
}
