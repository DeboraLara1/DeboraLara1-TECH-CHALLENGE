import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyCardsComponent } from './card-my-cards.component';

describe('CardMyCardsComponent', () => {
  let component: CardMyCardsComponent;
  let fixture: ComponentFixture<CardMyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMyCardsComponent]
    });
    fixture = TestBed.createComponent(CardMyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
