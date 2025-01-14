import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent {
  @Input() iconCard!: string;
  @Input() titleCardSmall!: string;

  @Output() cardClick = new EventEmitter<void>();


  onCardClick() {
    this.cardClick.emit();
  }
}
