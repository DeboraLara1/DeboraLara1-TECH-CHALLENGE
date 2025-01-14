import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmallComponent } from './card-small.component';

describe('CardSmallComponent', () => {
  let component: CardSmallComponent;
  let fixture: ComponentFixture<CardSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSmallComponent]
    });
    fixture = TestBed.createComponent(CardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
