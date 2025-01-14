import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCenterNewTransactionComponent } from './card-center-new-transaction.component';

describe('CardCenterNewTransactionComponent', () => {
  let component: CardCenterNewTransactionComponent;
  let fixture: ComponentFixture<CardCenterNewTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCenterNewTransactionComponent]
    });
    fixture = TestBed.createComponent(CardCenterNewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
