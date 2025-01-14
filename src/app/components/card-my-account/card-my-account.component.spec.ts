import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyAccountComponent } from './card-my-account.component';

describe('CardMyAccountComponent', () => {
  let component: CardMyAccountComponent;
  let fixture: ComponentFixture<CardMyAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMyAccountComponent]
    });
    fixture = TestBed.createComponent(CardMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
