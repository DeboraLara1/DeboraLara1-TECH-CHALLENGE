import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRectangularComponent } from './card-rectangular.component';

describe('CardRectangularComponent', () => {
  let component: CardRectangularComponent;
  let fixture: ComponentFixture<CardRectangularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRectangularComponent]
    });
    fixture = TestBed.createComponent(CardRectangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
