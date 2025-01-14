import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCenterServicesAvailableComponent } from './card-center-services-available.component';

describe('CardCenterServicesAvailableComponent', () => {
  let component: CardCenterServicesAvailableComponent;
  let fixture: ComponentFixture<CardCenterServicesAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCenterServicesAvailableComponent]
    });
    fixture = TestBed.createComponent(CardCenterServicesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
